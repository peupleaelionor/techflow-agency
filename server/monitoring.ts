/**
 * API endpoint pour recevoir les erreurs et métriques du client
 */

import { Request, Response } from 'express';

// Store temporaire en mémoire (à remplacer par une DB en prod)
const errorLogs: any[] = [];
const metrics: any[] = [];

/**
 * POST /api/errors - Enregistre une erreur client
 */
export async function handleClientError(req: Request, res: Response) {
  try {
    const { message, severity, context, stackTrace, url } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message requis' });
    }

    const errorLog = {
      id: `err_${Date.now()}`,
      timestamp: new Date().toISOString(),
      message,
      severity,
      context,
      stackTrace,
      url,
      userAgent: req.headers['user-agent']
    };

    errorLogs.push(errorLog);

    // Garder seulement les 1000 dernières erreurs
    if (errorLogs.length > 1000) {
      errorLogs.shift();
    }

    // En production, vous pourriez envoyer à un service d'erreur tracking
    // (Sentry, LogRocket, etc.)
    console.log('Client Error:', errorLog);

    res.json({ success: true, id: errorLog.id });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de l\'erreur client:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}

/**
 * POST /api/metrics - Enregistre une métrique de performance
 */
export async function handleMetric(req: Request, res: Response) {
  try {
    const { metric, value, pageName, status, threshold } = req.body;

    if (!metric || value === undefined) {
      return res.status(400).json({ error: 'Métrique et valeur requises' });
    }

    const metricLog = {
      id: `metric_${Date.now()}`,
      timestamp: new Date().toISOString(),
      metric,
      value,
      pageName,
      status,
      threshold,
      userAgent: req.headers['user-agent']
    };

    metrics.push(metricLog);

    // Garder seulement les 10000 dernières métriques
    if (metrics.length > 10000) {
      metrics.shift();
    }

    // Alerter si métrique critique
    if (status === 'critical') {
      console.warn(`⚠️ MÉTRIQUE CRITIQUE: ${metric} = ${value}${metric.includes('time') ? 'ms' : ''}`);
    }

    res.json({ success: true, id: metricLog.id });
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement de la métrique:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}

/**
 * GET /api/errors - Récupère les erreurs (debug seulement)
 */
export async function getErrors(req: Request, res: Response) {
  const limit = parseInt(req.query.limit as string) || 50;
  const severity = req.query.severity as string;

  let filtered = errorLogs;

  if (severity) {
    filtered = filtered.filter(e => e.severity === severity);
  }

  res.json({
    total: filtered.length,
    errors: filtered.slice(-limit)
  });
}

/**
 * GET /api/metrics - Récupère les métriques (debug seulement)
 */
export async function getMetrics(req: Request, res: Response) {
  const limit = parseInt(req.query.limit as string) || 100;
  const metric = req.query.metric as string;

  let filtered = metrics;

  if (metric) {
    filtered = filtered.filter(m => m.metric === metric);
  }

  // Calculer les statistiques
  const critical = filtered.filter(m => m.status === 'critical');
  const warnings = filtered.filter(m => m.status === 'warning');

  res.json({
    total: filtered.length,
    summary: {
      critical: critical.length,
      warnings: warnings.length,
      healthy: filtered.length - critical.length - warnings.length
    },
    metrics: filtered.slice(-limit)
  });
}

/**
 * GET /api/health - Status général du système
 */
export async function getHealth(req: Request, res: Response) {
  const recentErrors = errorLogs.filter(
    e => new Date(e.timestamp) > new Date(Date.now() - 5 * 60 * 1000)
  );

  const criticalMetrics = metrics.filter(
    m => m.status === 'critical' && 
        new Date(m.timestamp) > new Date(Date.now() - 5 * 60 * 1000)
  );

  const status = criticalMetrics.length > 5 ? 'degraded' : 'healthy';

  res.json({
    status,
    timestamp: new Date().toISOString(),
    recentErrors: recentErrors.length,
    criticalMetrics: criticalMetrics.length,
    totalErrors: errorLogs.length,
    totalMetrics: metrics.length
  });
}
