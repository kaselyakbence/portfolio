import "./navbaritem.scss";
import { scroller } from "react-scroll";
import { NavBarState } from "../NavBar";

interface NavbarItemProps {
  id: keyof NavBarState;
  active: boolean;
  mode: "navbaritem" | "sidebaritem";
  onClick?: () => void;
}

const NavbarItem = ({ id, active, mode, onClick }: NavbarItemProps) => {
  return (
    <p
      className={active ? `${mode} active` : mode}
      onClick={() => {
        scroller.scrollTo(id, {
          duration: 1000,
          smooth: true,
          offset: 5,
        });

        if (onClick) onClick();
      }}
    >
      {id}
    </p>
  );
};

export default NavbarItem;
