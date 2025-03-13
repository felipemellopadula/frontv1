import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Renderiza o App como o componente raiz
import ErrorBoundary from './components/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);