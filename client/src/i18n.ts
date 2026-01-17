/**
 * i18n Configuration
 * Currently disabled - i18next not installed
 * TODO: Install i18next, react-i18next, i18next-browser-languagedetector
 * Then uncomment the code below and use with LanguageSwitcher component
 */

/*
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import frTranslation from './locales/fr/translation.json';
import esTranslation from './locales/es/translation.json';
import enTranslation from './locales/en/translation.json';
import ptTranslation from './locales/pt/translation.json';
import lnTranslation from './locales/ln/translation.json';

const resources = {
  fr: {
    translation: frTranslation
  },
  es: {
    translation: esTranslation
  },
  en: {
    translation: enTranslation
  },
  pt: {
    translation: ptTranslation
  },
  ln: {
    translation: lnTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    debug: false,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['querystring', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage']
    }
  });

export default i18n;
*/

// Empty export to prevent errors
export {};
