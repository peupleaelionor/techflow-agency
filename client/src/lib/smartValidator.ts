/**
 * Système de validation automatique intelligent
 * Valide les données en temps réel et suggère des corrections
 */

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
  suggestions: string[];
}

export interface ValidationError {
  field: string;
  message: string;
  code: string;
  severity: 'error' | 'warning';
}

export interface ValidationWarning {
  field: string;
  message: string;
  suggestedFix?: string;
}

class SmartValidator {
  /**
   * Valide un email
   */
  validateEmail(email: string): ValidationResult {
    const errors: ValidationError[] = [];
    const warnings: ValidationWarning[] = [];
    const suggestions: string[] = [];

    if (!email || email.trim().length === 0) {
      errors.push({
        field: 'email',
        message: 'Email requis',
        code: 'EMAIL_REQUIRED',
        severity: 'error'
      });
      return { isValid: false, errors, warnings, suggestions };
    }

    // Validation basique de format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push({
        field: 'email',
        message: 'Format email invalide',
        code: 'INVALID_EMAIL_FORMAT',
        severity: 'error'
      });
      
      // Suggestions intelligentes
      if (email.includes('@')) {
        const parts = email.split('@');
        if (!parts[1].includes('.')) {
          suggestions.push('Le domaine doit contenir un point (ex: gmail.com)');
        }
      } else {
        suggestions.push('Un email doit contenir un @ (ex: user@gmail.com)');
      }
    }

    // Avertissements pour les domaines suspects
    const suspiciousDomains = ['test.com', 'example.com', 'localhost'];
    const domain = email.split('@')[1];
    if (suspiciousDomains.includes(domain)) {
      warnings.push({
        field: 'email',
        message: 'Cet email semble être un test. Vérifiez que c\'est le bon.',
        suggestedFix: 'Utilisez votre vrai email pour recevoir les messages'
      });
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      suggestions
    };
  }

  /**
   * Valide un téléphone
   */
  validatePhone(phone: string): ValidationResult {
    const errors: ValidationError[] = [];
    const warnings: ValidationWarning[] = [];
    const suggestions: string[] = [];

    if (!phone || phone.trim().length === 0) {
      // Le téléphone est optionnel, donc pas d'erreur
      return { isValid: true, errors, warnings, suggestions };
    }

    // Nettoyer le numéro
    const cleanPhone = phone.replace(/[\s\-().]/g, '');

    // Vérifier la longueur (France: 9-10 chiffres après le 0 ou +33)
    if (cleanPhone.length < 9) {
      suggestions.push('Le numéro semble trop court. Vérifiez les chiffres.');
    }

    if (cleanPhone.length > 15) {
      suggestions.push('Le numéro semble trop long.');
    }

    // Vérifier que ce sont des chiffres
    if (!/^\d+$/.test(cleanPhone)) {
      errors.push({
        field: 'phone',
        message: 'Le numéro doit contenir uniquement des chiffres',
        code: 'INVALID_PHONE_FORMAT',
        severity: 'error'
      });
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
      suggestions
    };
  }

  /**
   * Valide un formulaire de projet
   */
  validateProjectForm(data: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    projectType?: string;
    budget?: string;
    timeline?: string;
    message?: string;
  }): ValidationResult {
    const errors: ValidationError[] = [];
    const warnings: ValidationWarning[] = [];
    const suggestions: string[] = [];

    // Nom
    if (!data.firstName || data.firstName.trim().length < 2) {
      errors.push({
        field: 'firstName',
        message: 'Prénom requis (min 2 caractères)',
        code: 'FIRSTNAME_INVALID',
        severity: 'error'
      });
    }

    if (!data.lastName || data.lastName.trim().length < 2) {
      errors.push({
        field: 'lastName',
        message: 'Nom requis (min 2 caractères)',
        code: 'LASTNAME_INVALID',
        severity: 'error'
      });
    }

    // Email
    const emailValidation = this.validateEmail(data.email || '');
    if (!emailValidation.isValid) {
      errors.push(...emailValidation.errors);
      warnings.push(...emailValidation.warnings);
      suggestions.push(...emailValidation.suggestions);
    }

    // Téléphone
    const phoneValidation = this.validatePhone(data.phone || '');
    if (!phoneValidation.isValid) {
      errors.push(...phoneValidation.errors);
      warnings.push(...phoneValidation.warnings);
      suggestions.push(...phoneValidation.suggestions);
    }

    // Type de projet
    if (!data.projectType || data.projectType.length === 0) {
      errors.push({
        field: 'projectType',
        message: 'Veuillez sélectionner un type de projet',
        code: 'PROJECT_TYPE_REQUIRED',
        severity: 'error'
      });
    }

    // Budget
    if (!data.budget || data.budget.length === 0) {
      errors.push({
        field: 'budget',
        message: 'Veuillez indiquer une fourchette de budget',
        code: 'BUDGET_REQUIRED',
        severity: 'error'
      });
    }

    // Timeline
    if (!data.timeline || data.timeline.length === 0) {
      errors.push({
        field: 'timeline',
        message: 'Veuillez sélectionner un délai',
        code: 'TIMELINE_REQUIRED',
        severity: 'error'
      });
    }

    // Message
    if (!data.message || data.message.trim().length < 10) {
      errors.push({
        field: 'message',
        message: 'Décrivez votre projet (min 10 caractères)',
        code: 'MESSAGE_TOO_SHORT',
        severity: 'error'
      });
    } else if (data.message.trim().length > 5000) {
      warnings.push({
        field: 'message',
        message: 'Le message est très long (>5000 caractères)',
        suggestedFix: 'Envisagez de raccourcir pour plus de clarté'
      });
    }

    // Détection de spam
    const spamPatterns = [
      /viagra|cialis|casino|lottery/gi,
      /click here|buy now|limited offer/gi
    ];

    const messageText = (data.message || '').toLowerCase();
    for (const pattern of spamPatterns) {
      if (pattern.test(messageText)) {
        errors.push({
          field: 'message',
          message: 'Ce message ressemble à du spam',
          code: 'SPAM_DETECTED',
          severity: 'warning'
        });
        break;
      }
    }

    return {
      isValid: errors.filter(e => e.severity === 'error').length === 0,
      errors,
      warnings,
      suggestions
    };
  }

  /**
   * Valide une URL
   */
  validateUrl(url: string): ValidationResult {
    const errors: ValidationError[] = [];
    const suggestions: string[] = [];

    if (!url) {
      return { isValid: true, errors, warnings: [], suggestions };
    }

    try {
      new URL(url);
    } catch {
      errors.push({
        field: 'url',
        message: 'URL invalide',
        code: 'INVALID_URL',
        severity: 'error'
      });
      suggestions.push('Utilisez le format: https://example.com');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings: [],
      suggestions
    };
  }

  /**
   * Valide un slug/handle social
   */
  validateHandle(handle: string): ValidationResult {
    const errors: ValidationError[] = [];
    const suggestions: string[] = [];

    if (!handle || handle.trim().length === 0) {
      return { isValid: true, errors, warnings: [], suggestions };
    }

    // Doit commencer par @ optionnellement
    const cleanHandle = handle.startsWith('@') ? handle.slice(1) : handle;

    // Doit contenir uniquement des lettres, chiffres, et underscores
    if (!/^[a-zA-Z0-9_]+$/.test(cleanHandle)) {
      errors.push({
        field: 'handle',
        message: 'Le handle doit contenir uniquement des lettres, chiffres et underscores',
        code: 'INVALID_HANDLE',
        severity: 'error'
      });
    }

    if (cleanHandle.length < 3) {
      suggestions.push('Le handle doit avoir au moins 3 caractères');
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings: [],
      suggestions
    };
  }
}

export const smartValidator = new SmartValidator();
