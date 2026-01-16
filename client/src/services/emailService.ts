import emailjs from '@emailjs/browser';

// Configuration EmailJS
// IMPORTANT: Remplacer ces valeurs par vos vraies clés EmailJS
// 1. Créer un compte sur https://www.emailjs.com/
// 2. Ajouter un service email (Gmail, Outlook, etc.)
// 3. Créer un template d'email
// 4. Copier les clés PUBLIC_KEY, SERVICE_ID et TEMPLATE_ID

const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // À remplacer
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // À remplacer
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // À remplacer

// Protection anti-spam: limite de taux (rate limiting)
const RATE_LIMIT_KEY = 'contact_form_last_submit';
const RATE_LIMIT_DURATION = 60000; // 1 minute en millisecondes

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Vérifier si l'utilisateur a déjà soumis récemment
function checkRateLimit(): boolean {
  const lastSubmit = localStorage.getItem(RATE_LIMIT_KEY);
  if (lastSubmit) {
    const timeSinceLastSubmit = Date.now() - parseInt(lastSubmit);
    if (timeSinceLastSubmit < RATE_LIMIT_DURATION) {
      return false; // Trop tôt pour soumettre à nouveau
    }
  }
  return true;
}

// Enregistrer l'heure de soumission
function recordSubmission(): void {
  localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
}

// Validation supplémentaire côté client
function validateFormData(data: ContactFormData): { valid: boolean; error?: string } {
  // Vérifier les champs vides
  if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
    return { valid: false, error: 'Tous les champs sont requis.' };
  }

  // Vérifier la longueur du nom
  if (data.name.length < 2 || data.name.length > 100) {
    return { valid: false, error: 'Le nom doit contenir entre 2 et 100 caractères.' };
  }

  // Vérifier la longueur du message
  if (data.message.length < 10 || data.message.length > 2000) {
    return { valid: false, error: 'Le message doit contenir entre 10 et 2000 caractères.' };
  }

  // Vérifier le format de l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return { valid: false, error: 'Format d\'email invalide.' };
  }

  // Détection basique de spam (mots-clés suspects)
  const spamKeywords = ['viagra', 'casino', 'lottery', 'winner', 'click here', 'buy now'];
  const messageContent = data.message.toLowerCase();
  const hasSpam = spamKeywords.some(keyword => messageContent.includes(keyword));
  
  if (hasSpam) {
    return { valid: false, error: 'Message suspect détecté.' };
  }

  return { valid: true };
}

// Envoyer l'email via EmailJS
export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    // Vérifier le rate limiting
    if (!checkRateLimit()) {
      return {
        success: false,
        message: 'Veuillez attendre une minute avant de soumettre à nouveau.'
      };
    }

    // Validation supplémentaire
    const validation = validateFormData(data);
    if (!validation.valid) {
      return {
        success: false,
        message: validation.error || 'Données invalides.'
      };
    }

    // Préparer les paramètres du template
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      message: data.message,
      to_email: 'techflow@outlook.fr',
      reply_to: data.email,
    };

    // Envoyer l'email via EmailJS
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      // Enregistrer la soumission pour le rate limiting
      recordSubmission();
      
      return {
        success: true,
        message: 'Message envoyé avec succès ! Nous vous répondrons sous 24h.'
      };
    } else {
      throw new Error('Erreur lors de l\'envoi');
    }

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return {
      success: false,
      message: 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou nous contacter directement à techflow@outlook.fr'
    };
  }
}

// Alternative: Envoi direct via Formspree (solution de secours)
export async function sendViaFormspree(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  try {
    // Vérifier le rate limiting
    if (!checkRateLimit()) {
      return {
        success: false,
        message: 'Veuillez attendre une minute avant de soumettre à nouveau.'
      };
    }

    // Validation
    const validation = validateFormData(data);
    if (!validation.valid) {
      return {
        success: false,
        message: validation.error || 'Données invalides.'
      };
    }

    // Envoyer via Formspree (gratuit, 50 soumissions/mois)
    // Créer un compte sur https://formspree.io/ et remplacer FORM_ID
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
    
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
        _replyto: data.email,
        _subject: `Nouveau message de ${data.name} - TechFlow Solutions`,
      }),
    });

    if (response.ok) {
      recordSubmission();
      return {
        success: true,
        message: 'Message envoyé avec succès ! Nous vous répondrons sous 24h.'
      };
    } else {
      throw new Error('Erreur lors de l\'envoi');
    }

  } catch (error) {
    console.error('Erreur Formspree:', error);
    return {
      success: false,
      message: 'Une erreur est survenue. Veuillez nous contacter à techflow@outlook.fr'
    };
  }
}

// Fonction de secours: envoyer via mailto (ouvre le client email)
export function sendViaMailto(data: ContactFormData): void {
  const subject = encodeURIComponent(`Contact TechFlow - ${data.name}`);
  const body = encodeURIComponent(
    `Nom: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`
  );
  
  window.location.href = `mailto:techflow@outlook.fr?subject=${subject}&body=${body}`;
}
