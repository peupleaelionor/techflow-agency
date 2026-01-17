/**
 * Hook personnalisé pour utiliser les systèmes d'erreur et monitoring
 */

import { useEffect, useState, useCallback } from 'react';
import { errorHandler, ErrorSeverity } from '@/lib/errorHandler';
import { monitor } from '@/lib/monitor';
import { smartValidator } from '@/lib/smartValidator';

interface UseSmartErrorProps {
  componentName: string;
  onError?: (error: Error) => void;
}

/**
 * Hook pour gérer les erreurs de manière intelligente
 */
export function useSmartError({ componentName, onError }: UseSmartErrorProps) {
  const logError = useCallback((
    message: string,
    context?: Record<string, any>
  ) => {
    const error = errorHandler.log(
      message,
      ErrorSeverity.ERROR,
      { ...context, component: componentName }
    );

    if (onError && typeof Error !== 'undefined') {
      const err = new Error(message);
      onError(err);
    }

    return error;
  }, [componentName, onError]);

  const logWarning = useCallback((
    message: string,
    context?: Record<string, any>
  ) => {
    return errorHandler.log(
      message,
      ErrorSeverity.WARNING,
      { ...context, component: componentName }
    );
  }, [componentName]);

  return { logError, logWarning };
}

/**
 * Hook pour monitorer les performances
 */
export function usePerformanceMonitor(componentName: string) {
  const [metrics, setMetrics] = useState(monitor.getMetrics());

  useEffect(() => {
    // Récupérer les métriques toutes les 5 secondes
    const interval = setInterval(() => {
      setMetrics(monitor.getMetrics());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getCriticalMetrics = useCallback(() => {
    return monitor.getCriticalMetrics();
  }, []);

  const getHealth = useCallback(() => {
    return monitor.getHealthSummary();
  }, []);

  return {
    metrics,
    criticalMetrics: getCriticalMetrics(),
    health: getHealth()
  };
}

/**
 * Hook pour valider les données
 */
export function useValidation() {
  const [validationErrors, setValidationErrors] = useState<Record<string, string[]>>({});

  const validateEmail = useCallback((email: string) => {
    const result = smartValidator.validateEmail(email);
    if (!result.isValid) {
      setValidationErrors(prev => ({
        ...prev,
        email: result.errors.map(e => e.message)
      }));
    } else {
      setValidationErrors(prev => {
        const { email, ...rest } = prev;
        return rest;
      });
    }
    return result;
  }, []);

  const validatePhone = useCallback((phone: string) => {
    const result = smartValidator.validatePhone(phone);
    if (!result.isValid) {
      setValidationErrors(prev => ({
        ...prev,
        phone: result.errors.map(e => e.message)
      }));
    } else {
      setValidationErrors(prev => {
        const { phone, ...rest } = prev;
        return rest;
      });
    }
    return result;
  }, []);

  const validateForm = useCallback((data: any) => {
    const result = smartValidator.validateProjectForm(data);
    
    const newErrors: Record<string, string[]> = {};
    for (const error of result.errors) {
      if (!newErrors[error.field]) {
        newErrors[error.field] = [];
      }
      newErrors[error.field].push(error.message);
    }
    
    setValidationErrors(newErrors);
    return result;
  }, []);

  const clearErrors = useCallback(() => {
    setValidationErrors({});
  }, []);

  return {
    validationErrors,
    validateEmail,
    validatePhone,
    validateForm,
    clearErrors,
    hasErrors: Object.keys(validationErrors).length > 0
  };
}

/**
 * Hook pour retry automatique
 */
export function useAutoRetry<T>(
  fn: () => Promise<T>,
  maxRetries = 3,
  delayMs = 1000
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  const execute = useCallback(async () => {
    setLoading(true);
    setError(null);

    let lastError: Error | null = null;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const result = await fn();
        setData(result);
        setLoading(false);
        setRetryCount(0);
        return result;
      } catch (err) {
        lastError = err instanceof Error ? err : new Error(String(err));
        
        if (attempt < maxRetries) {
          // Attendre avant de retry avec backoff exponentiel
          await new Promise(resolve => 
            setTimeout(resolve, delayMs * Math.pow(2, attempt))
          );
          setRetryCount(attempt + 1);
        }
      }
    }

    setError(lastError);
    setLoading(false);
    return null;
  }, [fn, maxRetries, delayMs]);

  return { data, loading, error, execute, retryCount };
}
