import "./project.scss";
import background from "../../../../assets/projects/portfolio.png";

function Project() {
  return (
    <div className="project">
      <img src={background} alt="" className="project-image" />
      <p>Project</p>
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
}

export default Project;
