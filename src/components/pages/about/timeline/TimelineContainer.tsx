import { useTranslation } from "react-i18next";
import { AboutMode } from "../About";
import {
  educationEntries,
  professionalEntries,
  projectTimelineForLang,
} from "./data";
import { certificationEntries, projectCertsForLang } from "./certifications";
import CustomTimeline from "./subcomponents/CustomTimeline";
import "./timelinecontainer.scss";

import CertItem from "./subcomponents/CertItem";
import { isSupportedLang } from "../../../../i18n/languages";

interface TimelineContainerProps {
  mode: AboutMode;
}

const TimelineContainer = ({ mode }: TimelineContainerProps) => {
  const { t, i18n } = useTranslation();
  const lang = isSupportedLang(i18n.language) ? i18n.language : "en";

  return (
    <div className="card-right">
      {mode === "professional" && (
        <CustomTimeline
          items={projectTimelineForLang(professionalEntries, lang)}
        />
      )}
      {mode === "academic" && (
        <CustomTimeline
          items={projectTimelineForLang(educationEntries, lang)}
        />
      )}
      {mode === "about" && (
        <div className="about-info">
          <p>{t("about.aboutMeParagraphs.0")}</p>
          <p>{t("about.aboutMeParagraphs.1")}</p>
          <p>{t("about.aboutMeParagraphs.2")}</p>
          <p>{t("about.aboutMeParagraphs.3")}</p>
        </div>
      )}
      {mode === "certifications" && (
        <ul className="cert-list">
          {projectCertsForLang(certificationEntries, lang).map((cert) => (
            <CertItem
              key={cert.link}
              name={cert.name}
              date={cert.date}
              logo={cert.logo}
              org={cert.org}
              link={cert.link}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimelineContainer;
