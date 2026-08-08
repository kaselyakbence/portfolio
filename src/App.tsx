import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Skills from "./components/pages/skills/Skills";
import Projects from "./components/pages/projects/Projects";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/Section";
import LanguageToggle from "./components/LanguageToggle";
import { useSectionNavigation } from "./hooks/useSectionNavigation";

const App = () => {
  const { navbarState, editNavbarState } = useSectionNavigation();

  return (
    <>
      <Navbar {...navbarState} />
      <LanguageToggle />
      <div className="video">
        <video autoPlay muted loop poster="/background-poster.webp">
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
