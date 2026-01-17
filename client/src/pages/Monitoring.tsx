/**
 * Tableau de bord de monitoring pour visualiser les erreurs et métriques
 */

import { useEffect, useState } from 'react';
import { errorHandler } from '@/lib/errorHandler';
import { monitor } from '@/lib/monitor';

export default function MonitoringDashboard() {
  const [errors, setErrors] = useState(errorHandler.getErrors());
  const [metrics, setMetrics] = useState(monitor.getMetrics());
  const [health, setHealth] = useState(monitor.getHealthSummary());
  const [autoRefresh, setAutoRefresh] = useState(true);

  useEffect(() => {
    if (!autoRefresh) return;

    const interval = setInterval(() => {
      setErrors(errorHandler.getErrors());
      setMetrics(monitor.getMetrics());
      setHealth(monitor.getHealthSummary());
    }, 5000);

    return () => clearInterval(interval);
  }, [autoRefresh]);

  const criticalErrors = errors.filter(e => e.severity === 'critical');
  const criticalMetrics = metrics.filter(m => m.status === 'critical');

  return (
    <div className="bg-black text-white p-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-black uppercase">🤖 Monitoring</h1>
          <button
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={`px-4 py-2 font-bold uppercase border-2 transition-all ${
              autoRefresh
                ? 'bg-[#CCFF00] text-black border-[#CCFF00]'
                : 'bg-gray-900 text-gray-400 border-gray-700'
            }`}
          >
            {autoRefresh ? '⏸ Auto Refresh ON' : '▶ Auto Refresh OFF'}
          </button>
        </div>

        {/* Health Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="border-4 border-[#CCFF00] p-6 bg-gray-900">
            <div className="text-xs font-mono text-gray-500 mb-2">STATUT GLOBAL</div>
            <div className={`text-3xl font-black uppercase ${
              health.health === 'healthy' ? 'text-[#10B981]' : 
              health.health === 'degraded' ? 'text-[#F59E0B]' : 
              'text-red-600'
            }`}>
              {health.health}
            </div>
          </div>

          <div className="border-4 border-red-600 p-6 bg-gray-900">
            <div className="text-xs font-mono text-gray-500 mb-2">ERREURS CRITIQUES</div>
            <div className="text-3xl font-black text-red-600">{criticalErrors.length}</div>
          </div>

          <div className="border-4 border-[#F59E0B] p-6 bg-gray-900">
            <div className="text-xs font-mono text-gray-500 mb-2">MÉTRIQUES CRITIQUES</div>
            <div className="text-3xl font-black text-[#F59E0B]">{criticalMetrics.length}</div>
          </div>
        </div>

        {/* Critical Errors */}
        <div className="mb-8">
          <h2 className="text-2xl font-black uppercase mb-4 text-red-600">Erreurs Critiques</h2>
          {criticalErrors.length > 0 ? (
            <div className="space-y-2">
              {criticalErrors.slice(-5).map(error => (
                <div key={error.id} className="border-2 border-red-600 p-4 bg-gray-900 rounded">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <p className="font-bold text-red-400">{error.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{error.id}</p>
                      <p className="text-xs text-gray-400 mt-1">{error.timestamp}</p>
                    </div>
                    <div className="ml-4 px-3 py-1 bg-red-900 rounded text-xs font-bold">
                      {error.code || 'ERROR'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="border-2 border-[#10B981] p-4 bg-gray-900 rounded text-[#10B981]">
              ✓ Aucune erreur critique détectée
            </div>
          )}
        </div>

        {/* Recent Metrics */}
        <div className="mb-8">
          <h2 className="text-2xl font-black uppercase mb-4 text-[#CCFF00]">Dernières Métriques</h2>
          <div className="space-y-2">
            {metrics.slice(-10).reverse().map(metric => (
              <div 
                key={`${metric.metric}-${metric.timestamp}`}
                className={`border-2 p-4 rounded transition-all ${
                  metric.status === 'critical' ? 'border-red-600 bg-red-900/20' :
                  metric.status === 'warning' ? 'border-[#F59E0B] bg-[#F59E0B]/10' :
                  'border-[#10B981] bg-[#10B981]/10'
                }`}
              >
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <p className="font-bold">{metric.metric}</p>
                    <p className="text-sm text-gray-400">{metric.pageName}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-black text-lg">
                      {typeof metric.value === 'number' ? metric.value.toFixed(2) : metric.value}
                      {metric.metric.includes('time') || metric.metric.includes('paint') ? 'ms' : ''}
                    </p>
                    <div className={`text-xs font-bold uppercase mt-1 ${
                      metric.status === 'critical' ? 'text-red-400' :
                      metric.status === 'warning' ? 'text-[#F59E0B]' :
                      'text-[#10B981]'
                    }`}>
                      {metric.status}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="border-4 border-[#CCFF00] p-6 bg-gray-900">
          <h3 className="text-lg font-bold uppercase mb-4">Statistiques</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-black">{errors.length}</div>
              <div className="text-xs font-mono text-gray-500">Total Erreurs</div>
            </div>
            <div>
              <div className="text-2xl font-black">{metrics.length}</div>
              <div className="text-xs font-mono text-gray-500">Total Métriques</div>
            </div>
            <div>
              <div className="text-2xl font-black">
                {health.totalMetrics > 0 
                  ? ((health.totalMetrics / metrics.length) * 100).toFixed(1) + '%'
                  : 'N/A'
                }
              </div>
              <div className="text-xs font-mono text-gray-500">Couverture</div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#CCFF00]">OK</div>
              <div className="text-xs font-mono text-gray-500">Statut Global</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
