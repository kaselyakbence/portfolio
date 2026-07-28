import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./skills.scss";
import SkillGroup from "./subcomponents/SkillGroup";

const programmingSkills = [
  { name: "Typescript", number: 4 },
  { name: "Javascript", number: 4 },
  { name: "AWS", number: 3, isHalf: false },
  { name: "Git", number: 3, isHalf: false },
  { name: "Python", number: 3 },
];

const frontendSkills = [
  { name: "React", number: 4 },
  { name: "HTML", number: 3, isHalf: true },
  { name: "CSS", number: 4 },
  { name: "SCSS", number: 3, isHalf: true },
  { name: "PWA", number: 2, isHalf: true },
];
const backendSkills = [
  { name: "NodeJS", number: 4 },
  { name: "ExpressJS", number: 3 },
  { name: "MongoDB", number: 3 },
  { name: "Postgres", number: 3 },
];

const testingSkills = [
  { name: "Manual", number: 4, isHalf: true },
  { name: "Cypress", number: 2, isHalf: true },
  { name: "Jest", number: 2, isHalf: true },
];

const languageSkills = [
  { name: "Hungarian", number: 5 },
  { name: "English", number: 4, isHalf: true },
  { name: "German", number: 2, isHalf: true },
];

const skillGroups = [
  { name: "Programming languages and tools", skills: programmingSkills },
  { name: "Front End Development", skills: frontendSkills },
  { name: "Back End Development", skills: backendSkills },
  { name: "Software Testing", skills: testingSkills },
  { name: "Languages", skills: languageSkills },
];

const Skills = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    // Sync initial arrow state from the Embla instance, which only exists
    // once this effect runs - not a cascading render, just a one-time read.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="skills-page">
      <div className="text">
        <h1>My Skills</h1>
        <p>
          During my professional work and academic years, I learned several
          skills, programming languages, and tools to further my career as a
          developer and tester. Here is a comprehensive overview of all the
          technical skills I acquired in Software development and Testing.
        </p>
      </div>
      <div className="skills">
        <div className="skills__viewport" ref={emblaRef}>
          <div className="skills__container">
            {skillGroups.map(({ name, skills }) => (
              <div className="skills__slide" key={name}>
                <SkillGroup name={name} skills={skills} />
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="skills__arrow skills__arrow--prev"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          aria-label="Previous skills"
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          className="skills__arrow skills__arrow--next"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          aria-label="Next skills"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Skills;
