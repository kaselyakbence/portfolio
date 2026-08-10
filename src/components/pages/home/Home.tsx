import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { isSupportedLang } from "../../../i18n/languages";
import "./home.scss";

// Font-size alone can't make every translation fill the same width - a
// shorter word (e.g. "Welcome") renders narrower than a longer one (e.g.
// "Willkommen") at the same size. Measuring the rendered text and scaling
// it to fit makes the heading fill the available width regardless of which
// language's word is showing.
const REFERENCE_PX = 100;
const MARGIN_RATIO = 0.9;
const MIN_PX = 32;
const MAX_PX = 120;

const useFitHeadingWidth = (
  headingRef: React.RefObject<HTMLElement | null>,
  containerRef: React.RefObject<HTMLElement | null>,
  dependency: unknown
) => {
  useLayoutEffect(() => {
    const heading = headingRef.current;
    const container = containerRef.current;
    if (!heading || !container) return;

    const fit = () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (!isMobile) {
        heading.style.fontSize = "";
        return;
      }

      heading.style.fontSize = `${REFERENCE_PX}px`;
      const naturalWidth = heading.scrollWidth;
      const availableWidth = container.clientWidth * MARGIN_RATIO;
      if (!naturalWidth || !availableWidth) return;

      const targetPx = REFERENCE_PX * (availableWidth / naturalWidth);
      heading.style.fontSize = `${Math.min(Math.max(targetPx, MIN_PX), MAX_PX)}px`;
    };

    fit();
    document.fonts?.ready?.then(fit);
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dependency]);
};

const Home = () => {
  const { t, i18n } = useTranslation();
  const lang = isSupportedLang(i18n.language) ? i18n.language : "en";
  const cvFile = `cv_${lang}.pdf`;
  const textRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useFitHeadingWidth(headingRef, textRef, lang);

  return (
    <div className="welcome-page">
      <div className="text" ref={textRef}>
        <div className="top-line" />
        <div className="text-body">
          <div className="left-line" />
          <div className="content">
            <h1 ref={headingRef}>{t("home.welcome")}</h1>
            <p className="name">{t("home.name")}</p>
            <p className="role">{t("home.role")}</p>
            <div className="resume">
              <button>
                <a href={cvFile} download={cvFile}>
                  {t("home.resumeButton")}
                </a>
              </button>
            </div>
          </div>
          <div className="right-line" />
        </div>
        <div className="bottom-line" />
      </div>
    </div>
  );
};
export default Home;
