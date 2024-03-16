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
    <div className="skill">
      <p>{name}:</p>
      <div className="level">
        {[...Array(number)].map(() => (
          <FaCircle className="circle" />
        ))}
        {isHalf ? <FaCircleHalfStroke className="circle" /> : <></>}
        {[...Array(5 - (isHalf ? number + 1 : number))].map(() => (
          <FaRegCircle className="circle" />
        ))}
      </div>
    </div>
  );
};

export default Skill;
