import { lazy, Suspense, ComponentType, ReactNode } from 'react';

interface LazyComponentProps {
  [key: string]: any;
}

export function lazyLoad<P extends LazyComponentProps>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  fallbackComponent?: ReactNode
) {
  const LazyComponent = lazy(importFunc);
  
  return (props: P) => (
    <Suspense fallback={fallbackComponent || <div className="flex items-center justify-center min-h-screen">Chargement...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
}
