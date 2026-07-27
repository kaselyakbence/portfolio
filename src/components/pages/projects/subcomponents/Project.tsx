import "./project.scss";

interface ProjectProps {
  name: string;
  githubLink: string;
  demoLink: string;
  imgSrc?: string;
}

const Project = ({ name, githubLink, demoLink, imgSrc }: ProjectProps) => {
  return (
    <div className="project">
      <img
        src={imgSrc}
        alt=""
        className="project-image"
        loading="lazy"
        decoding="async"
      />
      <p>{name}</p>
      <div className="buttons">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="button project-button"
        >
          GitHub
        </a>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="button project-button"
        >
          Live demo
        </a>
      </div>
    </div>
  );
};

export default Project;
