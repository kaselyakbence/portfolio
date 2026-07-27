import Home from "./components/pages/home/Home";
import About from "./components/pages/about/About";
import Skills from "./components/pages/skills/Skills";
import Projects from "./components/pages/projects/Projects";
import NavBar, { NavBarState } from "./components/navbar/NavBar";
import Section from "./components/Section";
import { scroller } from "react-scroll";
import { useEffect, useRef, useState } from "react";

const initialNavbarState: NavBarState = {
  home: true,
  about: false,
  skills: false,
  projects: false,
};

const sectionOrder = Object.keys(initialNavbarState) as (keyof NavBarState)[];
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

const App = () => {
  const [navbarState, setNavbarState] =
    useState<NavBarState>(initialNavbarState);

  const navbarStateRef = useRef(navbarState);
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    navbarStateRef.current = navbarState;
  }, [navbarState]);

  useEffect(() => {
    scroller.scrollTo("home", null);
  }, []);

  // Native scrolling is disabled (see body { overflow: hidden } in main.scss),
  // so wheel input is repurposed to jump one section forward/backward instead.
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

  const editNavbarState = (key: keyof NavBarState, value: boolean) => {
    setNavbarState({ ...navbarState, [key]: value });
  };

  return (
    <>
      <NavBar {...navbarState} />
      <div className="video">
        <video autoPlay muted loop>
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>
      <Section id="home" editNavbarState={editNavbarState}>
        <Home />
      </Section>
      <Section id="about" editNavbarState={editNavbarState}>
        <About />
      </Section>
      <Section id="skills" editNavbarState={editNavbarState}>
        <Skills />
      </Section>
      <Section id="projects" editNavbarState={editNavbarState}>
        <Projects />
      </Section>
    </>
  );
};

export default App;
