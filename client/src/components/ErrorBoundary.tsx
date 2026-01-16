import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4">
          <div className="text-center max-w-2xl">
            <h1 className="text-6xl font-black text-black dark:text-white mb-4">
              Oups !
            </h1>
            <div className="w-32 h-2 bg-[#CCFF00] mx-auto mb-8"></div>
            <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
              Une erreur s'est produite
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Nous sommes désolés, quelque chose s'est mal passé. Veuillez rafraîchir la page.
            </p>
            {this.state.error && (
              <details className="text-left bg-gray-100 dark:bg-gray-900 p-4 rounded border-2 border-black dark:border-white mb-8">
                <summary className="cursor-pointer font-bold text-black dark:text-white mb-2">
                  Détails de l'erreur
                </summary>
                <pre className="text-sm text-gray-700 dark:text-gray-300 overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold text-lg border-4 border-black dark:border-white hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
            >
              Rafraîchir la page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
