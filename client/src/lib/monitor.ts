/**
 * Système de monitoring automatique
 * Détecte les performances, erreurs réseau, et anomalies
 */

export interface MetricData {
  timestamp: string;
  pageName: string;
  metric: string;
  value: number;
  threshold?: number;
  status: 'normal' | 'warning' | 'critical';
}

export interface PerformanceMetrics {
  pageLoadTime: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
}

class Monitor {
  private metrics: MetricData[] = [];
  private maxMetrics = 500;
  private isProduction = import.meta.env.PROD;
  private thresholds = {
    pageLoadTime: 3000, // 3 secondes
    firstContentfulPaint: 1500, // 1.5 secondes
    largestContentfulPaint: 2500, // 2.5 secondes
    cumulativeLayoutShift: 0.1, // 10%
    networkLatency: 500 // 500ms
  };

  constructor() {
    this.initPerformanceMonitoring();
    this.initNetworkMonitoring();
    this.initResourceMonitoring();
  }

  /**
   * Initialise le monitoring des performances
   */
  private initPerformanceMonitoring(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    try {
      // Monitoring Web Vitals
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-paint') {
            this.recordMetric('first-paint', entry.startTime);
          } else if (entry.name === 'first-contentful-paint') {
            this.recordMetric('first-contentful-paint', entry.startTime);
          } else if (entry.entryType === 'largest-contentful-paint') {
            this.recordMetric('largest-contentful-paint', entry.startTime);
          } else if (entry.entryType === 'layout-shift') {
            // @ts-ignore
            this.recordMetric('cumulative-layout-shift', entry.value);
          }
        }
      });

      observer.observe({
        entryTypes: ['paint', 'largest-contentful-paint', 'layout-shift']
      });

      // Page load time
      window.addEventListener('load', () => {
        const navTiming = performance.getEntriesByType('navigation')[0];
        if (navTiming) {
          // @ts-ignore
          const loadTime = navTiming.loadEventEnd - navTiming.fetchStart;
          this.recordMetric('page-load-time', loadTime);
        }
      });
    } catch (error) {
      console.error('Erreur lors de l\'initialisation du monitoring des performances:', error);
    }
  }

  /**
   * Initialise le monitoring du réseau
   */
  private initNetworkMonitoring(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // @ts-ignore
          const latency = entry.responseEnd - entry.requestStart;
          
          // Vérifier si c'est une requête API
          // @ts-ignore
          if (entry.name.includes('/api/')) {
            this.recordMetric(`api-latency-${entry.name}`, latency);
          }
        }
      });

      observer.observe({ entryTypes: ['resource'] });
    } catch (error) {
      console.error('Erreur lors de l\'initialisation du monitoring réseau:', error);
    }
  }

  /**
   * Initialise le monitoring des ressources
   */
  private initResourceMonitoring(): void {
    if (typeof window === 'undefined') {
      return;
    }

    // Monitorer les images et CSS non chargés
    const originalFetch = window.fetch;
    window.fetch = async (...args: any[]) => {
      const startTime = performance.now();
      try {
        const response = await originalFetch(...args);
        const endTime = performance.now();
        
        const latency = endTime - startTime;
        const url = typeof args[0] === 'string' ? args[0] : args[0]?.url;

        if (!response.ok && response.status >= 400) {
          this.recordMetric(`http-${response.status}`, 1);
        }

        if (latency > this.thresholds.networkLatency) {
          this.recordMetric(`slow-network-${url}`, latency);
        }

        return response;
      } catch (error) {
        const endTime = performance.now();
        const latency = endTime - startTime;
        this.recordMetric('network-error', latency);
        throw error;
      }
    };
  }

  /**
   * Enregistre une métrique
   */
  private recordMetric(
    metricName: string,
    value: number,
    threshold?: number
  ): void {
    const actualThreshold = threshold || this.thresholds[metricName as keyof typeof this.thresholds];
    const status = this.getMetricStatus(value, actualThreshold);

    const metric: MetricData = {
      timestamp: new Date().toISOString(),
      pageName: typeof window !== 'undefined' ? window.location.pathname : 'unknown',
      metric: metricName,
      value,
      threshold: actualThreshold,
      status
    };

    this.metrics.push(metric);

    // Limiter la taille
    if (this.metrics.length > this.maxMetrics) {
      this.metrics = this.metrics.slice(-this.maxMetrics);
    }

    // Alerter si critique
    if (status === 'critical') {
      console.warn(`⚠️ Métrique critique: ${metricName} = ${value}ms (seuil: ${actualThreshold}ms)`);
      this.sendMetricToServer(metric);
    }
  }

  /**
   * Détermine le statut d'une métrique
   */
  private getMetricStatus(
    value: number,
    threshold?: number
  ): 'normal' | 'warning' | 'critical' {
    if (!threshold) return 'normal';
    
    if (value > threshold * 1.5) return 'critical';
    if (value > threshold) return 'warning';
    return 'normal';
  }

  /**
   * Envoie une métrique au serveur
   */
  private sendMetricToServer(metric: MetricData): void {
    if (!this.isProduction) return;

    try {
      fetch('/api/metrics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(metric)
      }).catch(() => {
        // Silencieusement échouer
      });
    } catch (e) {
      // Ne pas créer de boucle d'erreurs
    }
  }

  /**
   * Récupère les métriques
   */
  getMetrics(metricName?: string, limit?: number): MetricData[] {
    let filtered = this.metrics;

    if (metricName) {
      filtered = filtered.filter(m => m.metric === metricName);
    }

    if (limit) {
      filtered = filtered.slice(-limit);
    }

    return filtered;
  }

  /**
   * Récupère les métriques critiques
   */
  getCriticalMetrics(): MetricData[] {
    return this.metrics.filter(m => m.status === 'critical');
  }

  /**
   * Résumé de la santé du site
   */
  getHealthSummary() {
    const totalMetrics = this.metrics.length;
    const criticalMetrics = this.getCriticalMetrics().length;
    const warningMetrics = this.metrics.filter(m => m.status === 'warning').length;

    return {
      totalMetrics,
      criticalMetrics,
      warningMetrics,
      health: criticalMetrics === 0 ? 'healthy' : criticalMetrics < 3 ? 'degraded' : 'critical',
      timestamp: new Date().toISOString()
    };
  }

  /**
   * Exporte les métriques
   */
  exportMetrics(): string {
    return JSON.stringify(this.metrics, null, 2);
  }

  /**
   * Efface les métriques
   */
  clearMetrics(): void {
    this.metrics = [];
  }
}

export const monitor = new Monitor();
