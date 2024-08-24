import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Skills from "./components/pages/skills/Skills";
import Projects from "./components/pages/projects/Projects";
import NavBar from "./components/navbar/NavBar";
import Section from "./components/Section";

const App = () => {
  return (
    <>
      <div className="video">
        <video autoPlay muted loop>
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>
      <NavBar />
      <Section id="home" children={<Home />}></Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="skills">
        <Skills />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
    </>
  );
};

export default App;
