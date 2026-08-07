import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
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
  { id: "programming", skills: programmingSkills },
  { id: "frontend", skills: frontendSkills },
  { id: "backend", skills: backendSkills },
  { id: "testing", skills: testingSkills },
  { id: "languages", skills: languageSkills },
];

const Skills = () => {
  const { t } = useTranslation();
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
        <h1>{t("skills.title")}</h1>
        <p>{t("skills.intro")}</p>
      </div>
      <div className="skills">
        <div className="skills__viewport" ref={emblaRef}>
          <div className="skills__container">
            {skillGroups.map(({ id, skills }) => (
              <div className="skills__slide" key={id}>
                <SkillGroup name={t(`skills.groups.${id}`)} skills={skills} />
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="skills__arrow skills__arrow--prev"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          aria-label={t("skills.prevAriaLabel")}
        >
          <FaChevronLeft />
        </button>
        <button
          type="button"
          className="skills__arrow skills__arrow--next"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          aria-label={t("skills.nextAriaLabel")}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Skills;
