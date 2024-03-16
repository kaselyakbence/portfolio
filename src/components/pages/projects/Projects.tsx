import "./projects.scss";
import Project from "./subcomponents/Project";

const Projects = () => {
  return (
    <div className="project-grid">
      <Project />
      <Project />
      <Project />
      <Project />
    </div>
  );
};

export default Projects;
