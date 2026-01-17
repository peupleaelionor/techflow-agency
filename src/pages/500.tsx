import React from 'react';

const ErrorBoundary = () => {
    return (
        <div>
            <h1>500 - Erreur interne du serveur</h1>
            <p>Une erreur est survenue. Veuillez réessayer plus tard.</p>
            <a href="/">Retour à l'accueil</a>
        </div>
    );
};

export default ErrorBoundary;