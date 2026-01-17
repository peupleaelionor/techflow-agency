import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Initialiser les systèmes de monitoring et erreur
import { errorHandler } from '@/lib/errorHandler';
import { monitor } from '@/lib/monitor';

// En cas d'erreur non gérée
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    console.error('Erreur non gérée:', event.error);
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
