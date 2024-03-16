import "./skills.scss";
import Skillgroup from "./subcomponents/Skillgroup";

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
      <div className="skills">
        <Skillgroup
          name="Programming languages and tools"
          skills={programmingSkills}
        />
        <Skillgroup name="Front End Development" skills={frontendSkills} />
        <Skillgroup name="Back End Development" skills={backendSkills} />
        <Skillgroup name="Software Testing" skills={testingSkills} />
      </div>
    </div>
  );
};

export default Skills;
