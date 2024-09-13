import { useEffect, useRef } from "react";
import "./section.scss";
import { NavBarState } from "./navbar/NavBar";

interface SectionProps {
  id: keyof NavBarState;
  children: React.ReactNode;
  editNavbarState: (key: keyof NavBarState, value: boolean) => void;
}

const Section = ({ id, children, editNavbarState }: SectionProps) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        editNavbarState(id, entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(targetRef.current);
      }
    };
  }, [id, editNavbarState]);

  return (
    <section id={id} className="app-section" ref={targetRef}>
      {children}
    </section>
  );
};

export default Section;
