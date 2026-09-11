import { useEffect, useRef, useState } from "react";
import "./section.scss";
import { NavbarState } from "./navbar/Navbar";

interface SectionProps {
  id: keyof NavbarState;
  children: React.ReactNode;
  editNavbarState: (key: keyof NavbarState, value: boolean) => void;
}

const Section = ({ id, children, editNavbarState }: SectionProps) => {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(id === "home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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
    <section
      id={id}
      className={isVisible ? "app-section is-visible" : "app-section"}
      ref={targetRef}
    >
      {children}
    </section>
  );
};

export default Section;
