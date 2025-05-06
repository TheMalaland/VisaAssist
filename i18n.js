import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const isServer = typeof window === 'undefined';

i18n
  .use(Backend) // Carga los archivos de traducción desde /public/locales
  .use(initReactI18next) // Inicializa react-i18next
  // Solo usa LanguageDetector en el cliente
  .use({
    type: 'languageDetector',
    async: true,
    detect: (callback) => {
      const language = navigator.language || navigator.userLanguage;
      callback(language);
    },
  })

  // Configura el detector de idioma
  .init({
    fallbackLng: 'es', // Idioma predeterminado
    supportedLngs: ['en', 'es'], // Idiomas soportados
    debug: false,
    interpolation: {
      escapeValue: false, // React ya escapa los valores
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: false, // Deshabilita Suspense para SSR
    },
  });

export default i18n;