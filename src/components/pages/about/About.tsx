import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./about.scss";
import TimelineContainer from "./timeline/TimelineContainer";

export type AboutMode =
  "professional" | "academic" | "about" | "certifications";

interface MobileLayoutProps {
  mode: AboutMode;
  setMode: React.Dispatch<React.SetStateAction<AboutMode>>;
}

const MobileLayout = ({ mode, setMode }: MobileLayoutProps) => {
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
            aria-label="Close"
            onClick={() => setActive(false)}
          >
            <IoMdClose />
          </button>
          <TimelineContainer mode={mode} />
        </>
      ) : (
        <div className="card-left">
          <h1 className="about-header">Living in Berlin, Germany</h1>
          <p className="about-info">
            I’m a Software Developer,who specializes in Web development using
            Typescript and React, but I also have experience with other
            languages and tools like Python or Java.
          </p>
          <div className="line" />
          <ul className="buttons">
            <li>
              <button type="button" onClick={() => activate("professional")}>
                Professional experience
              </button>
            </li>
            <li>
              <button type="button" onClick={() => activate("academic")}>
                Academic experience
              </button>
            </li>
            <li>
              <button type="button" onClick={() => activate("certifications")}>
                Certifications
              </button>
            </li>
            <li>
              <button type="button" onClick={() => activate("about")}>
                About me
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

const About = () => {
  const [mode, setMode] = useState<AboutMode>("professional");

  return (
    <div className="about-page">
      <div className="card desktop-card">
        <div className="card-left">
          <h1 className="about-header">Living in Berlin, Germany</h1>
          <p className="about-info">
            I’m a Software Developer,who specializes in Web development using
            Typescript and React, but I also have experience with other
            languages and tools like Python or Java.
          </p>
          <div className="line" />
          <ul className="buttons">
            <li>
              <button
                type="button"
                onClick={() => setMode("professional")}
                className={mode == "professional" ? "active" : ""}
                aria-pressed={mode == "professional"}
              >
                Professional experience
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setMode("academic")}
                className={mode == "academic" ? "active" : ""}
                aria-pressed={mode == "academic"}
              >
                Academic experience
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setMode("certifications")}
                className={mode == "certifications" ? "active" : ""}
                aria-pressed={mode == "certifications"}
              >
                Certifications
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setMode("about")}
                className={mode == "about" ? "active" : ""}
                aria-pressed={mode == "about"}
              >
                About me
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
