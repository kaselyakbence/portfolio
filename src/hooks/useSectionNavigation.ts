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
const SWIPE_THRESHOLD = 50;

// Lets wheel/touch input scroll an internally-scrollable element (e.g. the
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

// Manages which page section is active and lets wheel/touch input jump one
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
    const goToRelativeSection = (direction: 1 | -1) => {
      if (isNavigatingRef.current) return;

      const activeIndex = sectionOrder.findIndex(
        (key) => navbarStateRef.current[key]
      );
      const currentIndex = activeIndex === -1 ? 0 : activeIndex;
      const nextIndex = currentIndex + direction;

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

    const handleWheel = (event: WheelEvent) => {
      if (isWithinScrollableElement(event.target)) return;

      event.preventDefault();

      if (event.deltaY === 0) return;

      goToRelativeSection(event.deltaY > 0 ? 1 : -1);
    };

    let touchStartY = 0;
    let touchStartedInScrollable = false;

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
      touchStartedInScrollable = isWithinScrollableElement(event.target);
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (touchStartedInScrollable) return;

      // Prevents mobile browsers' bounce/rubber-band overscroll while
      // swiping, since native scrolling is otherwise disabled.
      event.preventDefault();
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (touchStartedInScrollable) return;

      const touchEndY = event.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;

      if (Math.abs(deltaY) < SWIPE_THRESHOLD) return;

      goToRelativeSection(deltaY > 0 ? 1 : -1);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const editNavbarState = (key: keyof NavbarState, value: boolean) => {
    setNavbarState((prev) => ({ ...prev, [key]: value }));
  };

  return { navbarState, editNavbarState };
};
