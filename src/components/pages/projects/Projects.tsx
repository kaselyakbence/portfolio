import "./projects.scss";
import Project from "./subcomponents/Project";

import portfolio from "../../../assets/projects/portfolio.png";
import adk from "../../../assets/projects/adk.png";

const Projects = () => {
  return (
    <div className="project-grid">
      <Project
        name="ADK Dormitory Page"
        githubLink="https://github.com/kaselyakbence/adk-washing"
        demoLink="https://adk.kaselyakbence.com/"
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
