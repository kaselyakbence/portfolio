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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "keepSnaps",
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  // Embla's own slidesInView() flags a slide the moment a single pixel of it
  // overlaps the viewport, which reports one card too many right at the
  // scroll edges. Measuring the actual rendered slide width instead gives an
  // exact count of how many cards are fully on screen.
  const onResize = useCallback((api: EmblaCarouselType) => {
    const [firstSlide] = api.slideNodes();
    if (!firstSlide || firstSlide.offsetWidth === 0) return;

    setItemsPerView(
      Math.round(api.rootNode().offsetWidth / firstSlide.offsetWidth)
    );
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    // Sync initial arrow/dot state from the Embla instance, which only
    // exists once this effect runs - not a cascading render, just a
    // one-time read.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect(emblaApi);
    onResize(emblaApi);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("reInit", onResize);
    emblaApi.on("resize", onResize);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
      emblaApi.off("reInit", onResize);
      emblaApi.off("resize", onResize);
    };
  }, [emblaApi, onSelect, onResize]);

  const visibleCount = Math.min(
    itemsPerView,
    skillGroups.length - selectedIndex
  );

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
      <div className="skills__dots">
        {skillGroups.map(({ id }, index) => {
          const isVisible =
            index >= selectedIndex && index < selectedIndex + visibleCount;

          return (
            <button
              key={id}
              type="button"
              className={isVisible ? "skills__dot active" : "skills__dot"}
              aria-label={t("skills.slideAriaLabel", { number: index + 1 })}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
