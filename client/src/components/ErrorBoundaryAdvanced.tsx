/**
 * Error Boundary React avancé avec auto-correction
 */

import React, { Component, ReactNode } from 'react';
import { errorHandler, ErrorSeverity } from '@/lib/errorHandler';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorCount: number;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      errorCount: 0
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorCount: 0
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // Log l'erreur
    errorHandler.log(
      error.message,
      ErrorSeverity.ERROR,
      {
        componentStack: errorInfo.componentStack,
        errorBoundary: true
      },
      'REACT_ERROR'
    );

    // Call the optional callback
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    // Auto-reset après 5 secondes (tentative de récupération)
    setTimeout(() => {
      this.setState(prevState => ({
        ...prevState,
        errorCount: prevState.errorCount + 1,
        hasError: prevState.errorCount > 2 // Si > 2 erreurs, garder l'erreur affichée
      }));
    }, 5000);
  }

  handleReset = (): void => {
    this.setState({ hasError: false, error: undefined, errorCount: 0 });
    // Recharger la page comme dernier recours
    if (this.state.errorCount > 3) {
      window.location.reload();
    }
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="min-h-screen flex items-center justify-center bg-black text-white p-4">
            <div className="max-w-md w-full border-4 border-red-600 bg-black p-8">
              <h1 className="text-4xl font-black mb-4 text-red-600">⚠️ Erreur</h1>
              <p className="font-mono text-sm mb-6 text-gray-400">
                Une erreur inattendue s'est produite. Nos équipes ont été notifiées.
              </p>
              
              {/* Afficher le message d'erreur en développement */}
              {import.meta.env.DEV && this.state.error && (
                <div className="bg-gray-900 p-4 rounded border-2 border-red-600 mb-6 text-xs font-mono overflow-auto max-h-32">
                  <p className="text-red-400">{this.state.error.message}</p>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={this.handleReset}
                  className="flex-1 bg-[#CCFF00] text-black px-6 py-3 font-bold uppercase border-2 border-[#CCFF00] hover:bg-white transition-all"
                >
                  Réessayer
                </button>
                <a
                  href="/"
                  className="flex-1 bg-gray-900 text-white px-6 py-3 font-bold uppercase border-2 border-gray-700 hover:border-[#CCFF00] transition-all text-center"
                >
                  Accueil
                </a>
              </div>

              <p className="text-xs text-gray-500 mt-6 text-center">
                Erreur ID: {this.state.error?.message.slice(0, 10) || 'unknown'}
              </p>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
