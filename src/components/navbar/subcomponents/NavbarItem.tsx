import "./navbaritem.scss";
import { scroller } from "react-scroll";
import { NavbarState } from "../Navbar";

interface NavbarItemProps {
  id: keyof NavbarState;
  active: boolean;
  mode: "navbaritem" | "sidebaritem";
  onClick?: () => void;
}

const NavbarItem = ({ id, active, mode, onClick }: NavbarItemProps) => {
  return (
    <button
      type="button"
      className={active ? `${mode} active` : mode}
      aria-current={active ? "page" : undefined}
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
    </button>
  );
};

export default NavbarItem;
