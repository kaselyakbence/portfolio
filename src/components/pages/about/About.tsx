import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./about.scss";
import TimelineContainer from "./timeline/TimelineConainer";

export type AboutMode =
  | "professional"
  | "academic"
  | "about"
  | "certifications";

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
          <IoMdClose className="close-icon" onClick={() => setActive(false)} />
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
            <li onClick={() => activate("professional")}>
              Professional experience
            </li>
            <li onClick={() => activate("academic")}>Academic experience</li>
            <li onClick={() => activate("certifications")}>Certifications</li>
            <li onClick={() => activate("about")}>About me</li>
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
            <li
              onClick={() => setMode("professional")}
              className={mode == "professional" ? "active" : ""}
            >
              Professional experience
            </li>
            <li
              onClick={() => setMode("academic")}
              className={mode == "academic" ? "active" : ""}
            >
              Academic experience
            </li>
            <li
              onClick={() => setMode("certifications")}
              className={mode == "certifications" ? "active" : ""}
            >
              Certifications
            </li>
            <li
              onClick={() => setMode("about")}
              className={mode == "about" ? "active" : ""}
            >
              About me
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
