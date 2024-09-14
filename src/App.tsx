import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Skills from "./components/pages/skills/Skills";
import Projects from "./components/pages/projects/Projects";
import NavBar, { NavBarState } from "./components/navbar/NavBar";
import Section from "./components/Section";
import { scroller } from "react-scroll";
import { useEffect, useState } from "react";

const initialNavbarState: NavBarState = {
  home: true,
  about: false,
  skills: false,
  projects: false,
};

const App = () => {
  const [navbarState, setNavbarState] =
    useState<NavBarState>(initialNavbarState);

  useEffect(() => {
    scroller.scrollTo("home", null);
  }, []);

  const editNavbarState = (key: keyof NavBarState, value: boolean) => {
    setNavbarState({ ...navbarState, [key]: value });
  };

  return (
    <>
      <NavBar {...navbarState} />
      <div className="video">
        <video autoPlay muted loop>
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>
      <Section id="home" editNavbarState={editNavbarState}>
        <Home />
      </Section>
      <Section id="about" editNavbarState={editNavbarState}>
        <About />
      </Section>
      <Section id="skills" editNavbarState={editNavbarState}>
        <Skills />
      </Section>
      <Section id="projects" editNavbarState={editNavbarState}>
        <Projects />
      </Section>
    </>
  );
};

export default App;
