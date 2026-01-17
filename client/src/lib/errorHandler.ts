/**
 * Système de gestion des erreurs intelligent
 * Détecte, enregistre et gère automatiquement les erreurs
 */

export enum ErrorSeverity {
  INFO = 'info',
  WARNING = 'warning',
  ERROR = 'error',
  CRITICAL = 'critical'
}

export interface ErrorLog {
  id: string;
  timestamp: string;
  severity: ErrorSeverity;
  message: string;
  code?: string;
  context?: Record<string, any>;
  stackTrace?: string;
  url?: string;
  userAgent?: string;
  resolved?: boolean;
}

class ErrorHandler {
  private errors: ErrorLog[] = [];
  private maxErrors = 100;
  private isProduction = import.meta.env.PROD;

  /**
   * Enregistre une erreur
   */
  log(
    message: string,
    severity: ErrorSeverity = ErrorSeverity.ERROR,
    context?: Record<string, any>,
    code?: string
  ): ErrorLog {
    const error: ErrorLog = {
      id: `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: new Date().toISOString(),
      severity,
      message,
      code,
      context,
      url: typeof window !== 'undefined' ? window.location.href : undefined,
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
      resolved: false
    };

    this.errors.push(error);

    // Limiter la taille du buffer
    if (this.errors.length > this.maxErrors) {
      this.errors = this.errors.slice(-this.maxErrors);
    }

    // Log en console en développement
    if (!this.isProduction) {
      const logColor = {
        [ErrorSeverity.INFO]: 'color: #0066FF',
        [ErrorSeverity.WARNING]: 'color: #F59E0B',
        [ErrorSeverity.ERROR]: 'color: #EF4444',
        [ErrorSeverity.CRITICAL]: 'color: #DC2626; font-weight: bold'
      };

      console.log(`%c[${severity.toUpperCase()}] ${message}`, logColor[severity], context);
    }

    // Envoyer au serveur si critique
    if (severity === ErrorSeverity.CRITICAL) {
      this.sendToServer(error);
    }

    return error;
  }

  /**
   * Gère les erreurs non gérées
   */
  handleUncaughtError(error: Error | string, context?: Record<string, any>): void {
    const message = error instanceof Error ? error.message : String(error);
    const stackTrace = error instanceof Error ? error.stack : undefined;

    this.log(message, ErrorSeverity.CRITICAL, { ...context, stackTrace }, 'UNCAUGHT');
  }

  /**
   * Gère les rejets de promesse non gérés
   */
  handleUnhandledRejection(reason: any): void {
    const message = reason instanceof Error ? reason.message : String(reason);
    this.log(message, ErrorSeverity.CRITICAL, { reason }, 'UNHANDLED_REJECTION');
  }

  /**
   * Récupère les erreurs avec filtrage
   */
  getErrors(
    severity?: ErrorSeverity,
    limit?: number
  ): ErrorLog[] {
    let filtered = this.errors;

    if (severity) {
      filtered = filtered.filter(e => e.severity === severity);
    }

    if (limit) {
      filtered = filtered.slice(-limit);
    }

    return filtered;
  }

  /**
   * Marque une erreur comme résolue
   */
  resolveError(errorId: string): void {
    const error = this.errors.find(e => e.id === errorId);
    if (error) {
      error.resolved = true;
    }
  }

  /**
   * Envoie l'erreur au serveur pour monitoring
   */
  private sendToServer(error: ErrorLog): void {
    if (!this.isProduction) return;

    try {
      // Envoyer à un endpoint de monitoring (à configurer)
      fetch('/api/errors', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(error)
      }).catch(() => {
        // Silencieusement échouer si le serveur n'est pas disponible
      });
    } catch (e) {
      // Ne pas créer une boucle infinie d'erreurs
    }
  }

  /**
   * Exporte les logs pour débogage
   */
  exportLogs(): string {
    return JSON.stringify(this.errors, null, 2);
  }

  /**
   * Efface tous les logs
   */
  clearLogs(): void {
    this.errors = [];
  }
}

export const errorHandler = new ErrorHandler();

// Setup error handlers globaux
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    errorHandler.handleUncaughtError(event.error);
  });

  window.addEventListener('unhandledrejection', (event) => {
    errorHandler.handleUnhandledRejection(event.reason);
  });
}
