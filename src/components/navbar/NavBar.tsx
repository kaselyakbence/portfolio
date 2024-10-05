import "./navbar.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import NavbarItem from "./subcomponents/NavbarItem";
import { useState } from "react";

export interface NavBarState {
  home: boolean;
  about: boolean;
  skills: boolean;
  projects: boolean;
}

const NavBar = (navbarState: NavBarState) => {
  const [isOpen, setIsOpen] = useState(false);

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
          <div
            className={isOpen ? "ham-menu active" : "ham-menu"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {(Object.keys(navbarState) as (keyof NavBarState)[]).map((key) => (
            <NavbarItem
              id={key}
              key={key}
              active={navbarState[key]}
              mode="navbaritem"
            />
          ))}
        </>
      </div>

      <div className={isOpen ? "sidemenu active" : "sidemenu"}>
        {(Object.keys(navbarState) as (keyof NavBarState)[]).map((key) => (
          <NavbarItem
            id={key}
            key={key}
            active={navbarState[key]}
            mode="sidebaritem"
            onClick={() => setIsOpen(false)}
          />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
