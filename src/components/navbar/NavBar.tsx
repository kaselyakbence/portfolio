import "./navbar.scss";
import { Link } from "react-scroll";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/bencekaselyak/"
          target="_blank"
          className="nav-link"
        >
          <FaLinkedin color="white" className="icon" />
        </a>
        <a
          href="https://github.com/kaselyakbence"
          target="_blank"
          className="nav-link"
        >
          <FaGithub color="white" className="icon" />
        </a>
      </div>
      <div className="links">
        <Link to="home" className="nav-link" activeClass="active" smooth spy>
          <p>Home</p>
        </Link>
        <Link to="about" className="nav-link" activeClass="active" smooth spy>
          <p>About</p>
        </Link>
        <Link to="skills" className="nav-link" activeClass="active" smooth spy>
          <p>Skills</p>
        </Link>
        <Link
          to="projects"
          className="nav-link"
          activeClass="active"
          smooth
          spy
        >
          <p>Projects</p>
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
