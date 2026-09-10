import "./projects.scss";
import Project from "./subcomponents/Project";

import portfolio from "../../../assets/projects/portfolio.png";
import adk from "../../../assets/projects/adk-home.png";

const Projects = () => {
  return (
    <div className="project-grid">
      <Project
        name="ADK Dormitory Page"
        githubLink="https://github.com/kaselyakbence/adk-washing"
        demoLink="https://3-66-105-218.sslip.io/en"
        imgSrc={adk}
      />
      <Project
        name="Portfolio"
        githubLink="https://github.com/kaselyakbence/portfolio"
        demoLink="https://kaselyakbence.com/"
        imgSrc={portfolio}
      />
    </div>
  );
};

export default Projects;
