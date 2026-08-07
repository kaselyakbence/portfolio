import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import de from "./locales/de";
import hu from "./locales/hu";
import { DEFAULT_LANGUAGE, isSupportedLang } from "./languages";

// Read the language straight from the URL before i18next initializes, so a
// direct load of e.g. /de/ starts in German immediately instead of flashing
// English first and correcting itself once LocaleLayout's effect runs.
const langFromPath = window.location.pathname.split("/")[1];
const initialLanguage = isSupportedLang(langFromPath)
  ? langFromPath
  : DEFAULT_LANGUAGE;

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
    hu: { translation: hu },
  },
  lng: initialLanguage,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18next;
