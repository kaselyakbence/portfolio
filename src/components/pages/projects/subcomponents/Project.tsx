import "./project.scss";
import background from "../../../../assets/projects/portfolio.png";

interface ProjectProps {
  name: string;
  githubLink: string;
  demoLink: string;
}

const Project = ({ name, githubLink, demoLink }: ProjectProps) => {
  return (
    <div className="project">
      <img src={background} alt="" className="project-image" />
      <p>{name}</p>
      <div className="buttons">
        <a href={githubLink} target="_blank">
          <button className="button project-button">GitHub</button>
        </a>
        <a href={demoLink} target="_blank">
          <button className="button project-button">Live demo</button>
        </a>
      </div>
    </div>
  );
};

export default Project;
