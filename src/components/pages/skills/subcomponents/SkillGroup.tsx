import "./skillgroup.scss";

import Skill, { SkillProps } from "./Skill";

interface SkillGroupProps {
  name: string;
  skills: SkillProps[];
}

const SkillGroup = ({ name, skills }: SkillGroupProps) => {
  return (
    <div className="skill-group">
      <div className="skill-name">
        <h2>{name}</h2>
      </div>
      {skills.map(({ name, number, isHalf }, i) => (
        <Skill name={name} number={number} isHalf={isHalf} key={name + i} />
      ))}
    </div>
  );
};

export default SkillGroup;
