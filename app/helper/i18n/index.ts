import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translation/en.json";
import hi from "./translation/hi.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
  },
  lng: "en",
  fallbackLng: "en",
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
});

export default i18n;
