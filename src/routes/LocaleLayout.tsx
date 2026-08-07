import { useEffect } from "react";
import { Navigate, useParams } from "react-router";
import i18n from "../i18n";
import { DEFAULT_LANGUAGE, isSupportedLang } from "../i18n/languages";
import { useLocalizedMeta } from "../hooks/useLocalizedMeta";
import App from "../App";

// Captures the :lang URL segment and drives the active i18next language and
// <html lang>. Renders the existing App unchanged - this is the only place
// the URL and the rest of the app's language state meet.
const LocaleLayout = () => {
  const { lang } = useParams<{ lang: string }>();
  const activeLang = isSupportedLang(lang) ? lang : DEFAULT_LANGUAGE;

  useEffect(() => {
    if (!isSupportedLang(lang)) return;

    i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useLocalizedMeta(activeLang);

  if (!isSupportedLang(lang)) {
    return <Navigate to={`/${DEFAULT_LANGUAGE}`} replace />;
  }

  return <App />;
};

export default LocaleLayout;
