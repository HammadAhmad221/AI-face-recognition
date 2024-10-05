// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import enTranslation from './locals/en.json';
// import arTranslation from './locals/ar.json';

// i18n.use(initReactI18next).init({
//   resources: {
//     en: { translation: enTranslation },
//     ar: { translation: arTranslation }
//   },
//   lng: 'en', // Default language
//   fallbackLng: 'en',
//   interpolation: { escapeValue: false }
// });

// export default i18n;

// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locals/en.json';
import translationAR from './locals/ar.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      ar: {
        translation: translationAR
      }
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;
