import { useTranslation } from "react-i18next";
import { isSupportedLang } from "../../../i18n/languages";
import "./home.scss";

const Home = () => {
  const { t, i18n } = useTranslation();
  const lang = isSupportedLang(i18n.language) ? i18n.language : "en";
  const cvFile = `cv_${lang}.pdf`;

  return (
    <div className="welcome-page">
      <div className="text">
        <div className="top-line" />
        <div className="text-body">
          <div className="left-line" />
          <div>
            <h1>{t("home.welcome")}</h1>
            <p>{t("home.name")}</p>
            <p>{t("home.role")}</p>
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
