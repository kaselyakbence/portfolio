import "./skill.scss";

import { FaRegCircle, FaCircle } from "react-icons/fa";
import { FaCircleHalfStroke } from "react-icons/fa6";

export interface SkillProps {
  name: string;
  number: number;
  isHalf?: boolean;
}

const Skill = ({ name, number, isHalf }: SkillProps) => {
  return (
    <div className="skill" key={name}>
      <p>{name}:</p>
      <div className="level">
        {[...Array(number)].map((_, i) => (
          <FaCircle className="circle" key={name + i} />
        ))}
        {isHalf ? <FaCircleHalfStroke className="circle" /> : <></>}
        {[...Array(5 - (isHalf ? number + 1 : number))].map((_, i) => (
          <FaRegCircle className="circle" key={name + i} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
