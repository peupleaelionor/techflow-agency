/**
 * Configuration EmailJS pour le formulaire de contact
 * 
 * INSTRUCTIONS DE CONFIGURATION:
 * 
 * 1. Créer un compte EmailJS (gratuit):
 *    - Aller sur https://www.emailjs.com/
 *    - Créer un compte gratuit (200 emails/mois)
 * 
 * 2. Ajouter un service email:
 *    - Dans EmailJS Dashboard > Email Services
 *    - Cliquer "Add New Service"
 *    - Choisir "Outlook" ou "Gmail"
 *    - Connecter votre compte techflow@outlook.fr
 *    - Copier le SERVICE_ID
 * 
 * 3. Créer un template d'email:
 *    - Dans EmailJS Dashboard > Email Templates
 *    - Cliquer "Create New Template"
 *    - Utiliser ce contenu:
 * 
 *    Subject: Nouveau message de {{from_name}} - TechFlow Solutions
 * 
 *    Body:
 *    Bonjour,
 *    
 *    Vous avez reçu un nouveau message depuis le formulaire de contact TechFlow Solutions.
 *    
 *    Nom: {{from_name}}
 *    Email: {{from_email}}
 *    
 *    Message:
 *    {{message}}
 *    
 *    ---
 *    Ce message a été envoyé depuis le formulaire de contact de techflow-solutions.com
 * 
 *    - Copier le TEMPLATE_ID
 * 
 * 4. Obtenir la clé publique:
 *    - Dans EmailJS Dashboard > Account > General
 *    - Copier votre PUBLIC_KEY
 * 
 * 5. Remplacer les valeurs ci-dessous par vos vraies clés
 */

export const EMAIL_CONFIG = {
  // Clé publique EmailJS (visible côté client, c'est normal)
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  
  // ID du service email configuré
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  
  // ID du template d'email
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  
  // Email de destination
  recipientEmail: 'techflow@outlook.fr',
};

// Vérifier si la configuration est complète
export function isEmailConfigured(): boolean {
  return (
    EMAIL_CONFIG.publicKey !== 'YOUR_PUBLIC_KEY' &&
    EMAIL_CONFIG.serviceId !== 'YOUR_SERVICE_ID' &&
    EMAIL_CONFIG.templateId !== 'YOUR_TEMPLATE_ID'
  );
}

// Mode de secours si EmailJS n'est pas configuré
export const FALLBACK_MODE = {
  // Utiliser mailto comme solution de secours
  useMailto: true,
  
  // Message à afficher si EmailJS n'est pas configuré
  configMessage: 'Le service d\'envoi d\'emails n\'est pas encore configuré. Veuillez nous contacter directement à techflow@outlook.fr'
};
