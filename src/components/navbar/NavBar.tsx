import "./navbar.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import NavbarItem from "./subcomponents/NavbarItem";

export interface NavBarState {
  home: boolean;
  about: boolean;
  skills: boolean;
  projects: boolean;
}

const NavBar = (navbarState: NavBarState) => {
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
        <>
          {/* <div className="ham-menu active">
            <span></span>
            <span></span>
            <span></span>
          </div> */}
          {(Object.keys(navbarState) as (keyof NavBarState)[]).map((key) => (
            <NavbarItem id={key} key={key} active={navbarState[key]} />
          ))}
        </>
      </div>

      {/* <div className="sidemenu active"></div> */}
    </div>
  );
};

export default NavBar;
