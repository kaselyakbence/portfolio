import "./project.scss";
import background from "../../../../assets/projects/portfolio.png";

interface ProjectProps {
  name: string;
}

const Project = ({ name }: ProjectProps) => {
  return (
    <div className="project">
      <img src={background} alt="" className="project-image" />
      <p>{name}</p>
      <div className="buttons">
        <a href="">
          <button className="button project-button">GitHub</button>
        </a>
        <a href="">
          <button className="button project-button">Live demo</button>
        </a>
      </div>
    </div>
  );
};

export default Project;
