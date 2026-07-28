import { useEffect, useRef, useState } from "react";
import { scroller } from "react-scroll";
import { NavbarState } from "../components/navbar/Navbar";

const initialNavbarState: NavbarState = {
  home: true,
  about: false,
  skills: false,
  projects: false,
};

const sectionOrder = Object.keys(initialNavbarState) as (keyof NavbarState)[];
const SCROLL_DURATION = 1000;

// Lets wheel input scroll an internally-scrollable element (e.g. the
// about-page timeline lists) normally, instead of jumping sections.
const isWithinScrollableElement = (target: EventTarget | null): boolean => {
  let node = target instanceof Element ? target : null;

  while (node) {
    const { overflowY } = getComputedStyle(node);
    if (
      (overflowY === "auto" || overflowY === "scroll") &&
      node.scrollHeight > node.clientHeight
    ) {
      return true;
    }
    node = node.parentElement;
  }

  return false;
};

// Manages which page section is active and lets wheel input jump one
// section forward/backward, since native scrolling is disabled (see
// body { overflow: hidden } in main.scss).
export const useSectionNavigation = () => {
  const [navbarState, setNavbarState] =
    useState<NavbarState>(initialNavbarState);

  const navbarStateRef = useRef(navbarState);
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    navbarStateRef.current = navbarState;
  }, [navbarState]);

  useEffect(() => {
    scroller.scrollTo("home", null);
  }, []);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isWithinScrollableElement(event.target)) return;

      event.preventDefault();

      if (isNavigatingRef.current || event.deltaY === 0) return;

      const activeIndex = sectionOrder.findIndex(
        (key) => navbarStateRef.current[key]
      );
      const currentIndex = activeIndex === -1 ? 0 : activeIndex;
      const nextIndex = currentIndex + (event.deltaY > 0 ? 1 : -1);

      if (nextIndex < 0 || nextIndex >= sectionOrder.length) return;

      isNavigatingRef.current = true;
      scroller.scrollTo(sectionOrder[nextIndex], {
        duration: SCROLL_DURATION,
        smooth: true,
        offset: 5,
      });

      setTimeout(() => {
        isNavigatingRef.current = false;
      }, SCROLL_DURATION);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  const editNavbarState = (key: keyof NavbarState, value: boolean) => {
    setNavbarState((prev) => ({ ...prev, [key]: value }));
  };

  return { navbarState, editNavbarState };
};
