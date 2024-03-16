import "./projects.scss";
import Project from "./subcomponents/Project";

const Projects = () => {
  return (
    <div className="project-grid">
      <Project name="Portfolio" />
      <Project name="Project" />
      <Project name="Project" />
      <Project name="Project" />
    </div>
  );
};

export default Projects;
