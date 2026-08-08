import { Navigate } from "react-router";
import { DEFAULT_LANGUAGE, isSupportedLang } from "../i18n/languages";

// Detects the visitor's preferred language from the browser and redirects
// from the bare root to the matching /en, /de, or /hu path.
const RootRedirect = () => {
  const preferred = (navigator.languages ?? [navigator.language])
    .map((locale) => locale.split("-")[0])
    .find(isSupportedLang);

  return <Navigate to={`/${preferred ?? DEFAULT_LANGUAGE}`} replace />;
};

export default RootRedirect;
