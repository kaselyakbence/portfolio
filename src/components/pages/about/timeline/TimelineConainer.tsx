import { AboutMode } from "../About";
import { educationTimelineItems, professionalItems } from "./data";
import CustomTimeline from "./CustomTimeline";

interface AboutButtonsProps {
  mode: AboutMode;
}

const TimelineContainer = ({ mode }: AboutButtonsProps) => {
  return (
    <div className="card-right">
      {mode === "professional" && <CustomTimeline items={professionalItems} />}
      {mode === "academic" && <CustomTimeline items={educationTimelineItems} />}
      {mode === "about" && (
        <div className="about-info">
          <p>
            I was born in Debrecen, went to university and worked in Budapest
            and studied in Copenhagen. I came to Berlin to do an Erasmus+
            semester and learn fluent German, but fell in love with the city and
            all its people, so I decided to stay and build a career here. I love
            traveling around Europe, reading, and meeting people from all around
            the world.
          </p>
          <p>
            During my early academic education, I realized I had a deep interest
            in creating websites and web applications, so I decided to pursue a
            Software Developer career. I specialize in Javascript and Typescript
            (both in Backend and Frontend), but I also have academic and
            professional experience with other languages and tools like Python
            or Java.
          </p>
          <p>
            My goal is to gain relevant professional experience in every aspect
            of Web Development. I'm hoping to experience all roles required to
            develop and maintain a Web Application, so that one day I can start
            my own startup and create something truly unique, that helps others.
          </p>
        </div>
      )}
    </div>
  );
};

export default TimelineContainer;