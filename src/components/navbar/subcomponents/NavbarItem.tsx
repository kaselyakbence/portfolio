import "./navbaritem.scss";
import { scroller } from "react-scroll";
import { useTranslation } from "react-i18next";
import { NavbarState } from "../Navbar";

interface NavbarItemProps {
  id: keyof NavbarState;
  active: boolean;
  mode: "navbaritem" | "sidebaritem";
  onClick?: () => void;
}

const NavbarItem = ({ id, active, mode, onClick }: NavbarItemProps) => {
  const { t } = useTranslation();

  const navigateToSection = () => {
    const isMobileSafari =
      /iPhone|iPad|iPod/.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isSafari = /Safari/.test(navigator.userAgent);
    const isOtherIOSBrowser = /CriOS|FxiOS|EdgiOS|OPiOS/.test(
      navigator.userAgent
    );
    const target = document.getElementById(id);

    if (isMobileSafari && isSafari && !isOtherIOSBrowser && target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    scroller.scrollTo(id, {
      duration: 1000,
      smooth: true,
      offset: 5,
    });
  };

  return (
    <button
      type="button"
      className={active ? `${mode} active` : mode}
      aria-current={active ? "page" : undefined}
      onClick={() => {
        navigateToSection();

        if (onClick) onClick();
      }}
    >
      {t(`nav.${id}`)}
    </button>
  );
};

export default NavbarItem;
