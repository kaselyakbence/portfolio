import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Lang, SUPPORTED_LANGUAGES, isSupportedLang } from "../i18n/languages";
import "./languagetoggle.scss";

const LANGUAGE_LABELS: Record<Lang, string> = {
  en: "EN",
  de: "DE",
  hu: "HU",
};

// Fixed bottom-left language switcher. Collapsed, it shows only the active
// language as a trigger button; clicking it expands the full option row.
// Picking a language (or clicking the active one again) collapses it back.
// Switching swaps only the :lang URL segment via navigate(..., { replace:
// true }) - LocaleLayout is never keyed by lang, so App stays mounted and
// scroll position survives the switch.
const LanguageToggle = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const segments = location.pathname.split("/");
  const currentLang = isSupportedLang(segments[1]) ? segments[1] : "en";

  const handleClick = (lang: Lang) => {
    if (!isOpen) {
      setIsOpen(true);
      return;
    }

    if (lang !== currentLang) {
      segments[1] = lang;
      navigate(segments.join("/"), { replace: true });
    }

    setIsOpen(false);
  };

  return (
    <div className="language-toggle">
      {SUPPORTED_LANGUAGES.map((lang) => {
        const isCurrent = lang === currentLang;
        const collapsed = !isOpen && !isCurrent;

        return (
          <button
            key={lang}
            type="button"
            className={collapsed ? "collapsed" : ""}
            aria-pressed={isCurrent}
            aria-expanded={isCurrent ? isOpen : undefined}
            aria-hidden={collapsed}
            tabIndex={collapsed ? -1 : 0}
            onClick={() => handleClick(lang)}
          >
            {LANGUAGE_LABELS[lang]}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
