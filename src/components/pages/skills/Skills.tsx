import "./skills.scss";
import Skillgroup from "./subcomponents/Skillgroup";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const programmingSkills = [
  { name: "Typescript", number: 4 },
  { name: "Javascript", number: 4 },
  { name: "Python", number: 3 },
  { name: "Git", number: 3, isHalf: true },
  { name: "PHP", number: 2, isHalf: true },
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
  { name: "Jest", number: 3, isHalf: true },
];

const languageSkills = [
  { name: "Hungarian", number: 5 },
  { name: "English", number: 4, isHalf: true },
  { name: "German", number: 2, isHalf: true },
];

const responsive = {
  largeDesktop: {
    breakpoint: { max: 4000, min: 1300 },
    items: 4,
    partialVisibilityGutter: 30,
  },
  desktop: {
    breakpoint: { max: 1300, min: 800 },
    items: 3,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: { max: 800, min: 500 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

const Skills = () => {
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
      <Carousel
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        className="skills"
      >
        <Skillgroup
          name="Programming languages and tools"
          skills={programmingSkills}
        />
        <Skillgroup name="Front End Development" skills={frontendSkills} />
        <Skillgroup name="Back End Development" skills={backendSkills} />
        <Skillgroup name="Software Testing" skills={testingSkills} />
        <Skillgroup name="Languages" skills={languageSkills} />
      </Carousel>
    </div>
  );
};

export default Skills;

{
  /* <Carousel responsive={responsive}>
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
    </Carousel> */
}
