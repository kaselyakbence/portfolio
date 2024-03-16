import "./skillgroup.scss";

import Skill, { SkillProps } from "./Skill";

interface SkillgroupProps {
  name: string;
  skills: SkillProps[];
}

const Skillgroup = ({ name, skills }: SkillgroupProps) => {
  return (
    <div className="skill-group">
      <h2>{name}</h2>
      {skills.map(({ name, number, isHalf }) => (
        <Skill name={name} number={number} isHalf={isHalf} />
      ))}
    </div>
  );
};

export default Skillgroup;
