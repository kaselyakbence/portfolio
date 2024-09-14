import "./navbaritem.scss";
import { scroller } from "react-scroll";
import { NavBarState } from "../NavBar";

interface NavbarItemProps {
  id: keyof NavBarState;
  active: boolean;
}

const NavbarItem = ({ id, active }: NavbarItemProps) => {
  return (
    <p
      className={active ? "active navbaritem" : "navbaritem"}
      onClick={() =>
        scroller.scrollTo(id, {
          duration: 1000,
          smooth: true,
          offset: 5,
        })
      }
    >
      {id}
    </p>
  );
};

export default NavbarItem;
