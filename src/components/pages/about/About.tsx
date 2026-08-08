import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
import "./about.scss";
import TimelineContainer from "./timeline/TimelineContainer";

export type AboutMode =
  "professional" | "academic" | "about" | "certifications";

interface MobileLayoutProps {
  mode: AboutMode;
  setMode: React.Dispatch<React.SetStateAction<AboutMode>>;
}

const MobileLayout = ({ mode, setMode }: MobileLayoutProps) => {
  const { t } = useTranslation();
  const [active, setActive] = useState(false);

  const activate = (mode: AboutMode) => {
    setActive(true);
    setMode(mode);
  };

  return (
    <div className="card mobile-card">
      {active ? (
        <>
          <button
            type="button"
            className="close-icon"
            aria-label={t("about.close")}
            onClick={() => setActive(false)}
          >
            <IoMdClose />
          </button>
          <TimelineContainer mode={mode} />
        </>
      ) : (
        <div className="card-left">
          <h1 className="about-header">{t("about.header")}</h1>
          <p className="about-info">{t("about.bio")}</p>
          <div className="line" />
          <ul className="buttons">
            <li>
              <button type="button" onClick={() => activate("professional")}>
                {t("about.tabs.professional")}
              </button>
            </li>
            <li>
              <button type="button" onClick={() => activate("academic")}>
                {t("about.tabs.academic")}
              </button>
            </li>
            <li>
              <button type="button" onClick={() => activate("certifications")}>
                {t("about.tabs.certifications")}
              </button>
            </li>
            <li>
              <button type="button" onClick={() => activate("about")}>
                {t("about.tabs.aboutMe")}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const About = () => {
  const { t } = useTranslation();
  const [mode, setMode] = useState<AboutMode>("professional");

  return (
    <div className="about-page">
      <div className="card desktop-card">
        <div className="card-left">
          <h1 className="about-header">{t("about.header")}</h1>
          <p className="about-info">{t("about.bio")}</p>
          <div className="line" />
          <ul className="buttons">
            <li>
              <button
                type="button"
                onClick={() => setMode("professional")}
                className={mode == "professional" ? "active" : ""}
                aria-pressed={mode == "professional"}
              >
                {t("about.tabs.professional")}
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setMode("academic")}
                className={mode == "academic" ? "active" : ""}
                aria-pressed={mode == "academic"}
              >
                {t("about.tabs.academic")}
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setMode("certifications")}
                className={mode == "certifications" ? "active" : ""}
                aria-pressed={mode == "certifications"}
              >
                {t("about.tabs.certifications")}
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setMode("about")}
                className={mode == "about" ? "active" : ""}
                aria-pressed={mode == "about"}
              >
                {t("about.tabs.aboutMe")}
              </button>
            </li>
          </ul>
        </div>
        <TimelineContainer mode={mode} />
      </div>
      <MobileLayout mode={mode} setMode={setMode} />
    </div>
  );
};

export default About;
