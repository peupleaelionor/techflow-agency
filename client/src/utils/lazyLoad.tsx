import { lazy, Suspense, ComponentType } from 'react';

interface LazyComponentProps {
  [key: string]: any;
}

export function lazyLoad<P extends LazyComponentProps>(
  importFunc: () => Promise<{ default: ComponentType<P> }>,
  fallback: ComponentType = () => <div className="flex items-center justify-center min-h-screen">Chargement...</div>
) {
  const LazyComponent = lazy(importFunc);
  
  return (props: P) => (
    <Suspense fallback={<fallback />}>
      <LazyComponent {...props} />
    </Suspense>
  );
}
