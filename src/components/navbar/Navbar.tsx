import "./navbar.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import NavbarItem from "./subcomponents/NavbarItem";
import { useState } from "react";

export interface NavbarState {
  home: boolean;
  about: boolean;
  skills: boolean;
  projects: boolean;
}

const Navbar = (navbarState: NavbarState) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="nav-bar">
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/bencekaselyak/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="nav-link"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://github.com/kaselyakbence"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="nav-link"
        >
          <FaGithub className="icon" />
        </a>
      </div>
      <div className="links">
        <>
          <button
            type="button"
            className={isOpen ? "ham-menu active" : "ham-menu"}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          {(Object.keys(navbarState) as (keyof NavbarState)[]).map((key) => (
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
        {(Object.keys(navbarState) as (keyof NavbarState)[]).map((key) => (
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

export default Navbar;
