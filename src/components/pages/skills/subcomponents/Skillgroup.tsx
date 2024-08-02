import "./skillgroup.scss";

import Skill, { SkillProps } from "./Skill";

interface SkillgroupProps {
  name: string;
  skills: SkillProps[];
}

const Skillgroup = ({ name, skills }: SkillgroupProps) => {
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

export default Skillgroup;
