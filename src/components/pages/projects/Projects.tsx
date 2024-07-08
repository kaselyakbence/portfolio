import "./projects.scss";
import Project from "./subcomponents/Project";

const Projects = () => {
  return (
    <div className="project-grid">
      <Project
        name="Portfolio"
        githubLink="https://github.com/kaselyakbence/portfolio"
        demoLink="https://kaselyakbence.com/"
      />
    </div>
  );
};

export default Projects;
