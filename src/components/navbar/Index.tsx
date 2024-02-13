import { NavLink } from "react-router-dom"
import "./index.scss"
import { FaLinkedin, FaGithub } from "react-icons/fa";


const NavBar = () => {
    return <div className="nav-bar">
        <div className="icons" >
            <a href="https://www.linkedin.com/in/bencekaselyak/" target="_blank" className="nav-link">
                <FaLinkedin color="white" />
            </a>
            <a href="https://github.com/kaselyakbence" target="_blank" className="nav-link">
                <FaGithub color="white" />
            </a>
        </div>
        <div className="links">
            <NavLink to="/" className="nav-link">
                <p>Home</p>
            </NavLink>
            <NavLink to="/about" className="nav-link">
                <p>About</p>
            </NavLink>
            <NavLink to="/skills" className="nav-link">
                <p>Skills</p>
            </NavLink>
            <NavLink to="/projects" className="nav-link">
                <p>Projects</p>
            </NavLink></div>
    </div>
}
export default NavBar