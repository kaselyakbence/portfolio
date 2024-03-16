import { useState } from "react";
import "./about.scss";

type AboutType = "personal" | "education" | "professional";

const About = () => {
  const [about, setAbout] = useState<AboutType>("personal");

  return (
    <div className="about-page">
      <div className="side">
        <h1>Bence Kaselyák</h1>
        <p className="about-info">Living in Berlin, Germany</p>
        <p className="about-info">
          I build web complex application with the help of modern frameworks and
          test complex software solutions.
        </p>
        <ul>
          <li
            className={`${about === "personal" ? "active" : ""} about-button`}
            onClick={() => setAbout("personal")}
          >
            Personal goals
          </li>
          <li
            className={`${
              about === "professional" ? "active" : ""
            } about-button`}
            onClick={() => setAbout("professional")}
          >
            Professional experience
          </li>
          <li
            className={`${about === "education" ? "active" : ""} about-button`}
            onClick={() => setAbout("education")}
          >
            Academic experience
          </li>
        </ul>
      </div>
      <div className="side">
        {about === "personal" && (
          <ul>
            <li>
              I was born in Debrecen, went to university and worked in Budapest
              and studied in Copenhagen. I came to Berlin to do an Erasmus+
              semester and learn fluent German, but fell in love with the city
              and all its people, so I decided to stay and build a career here.
              I love traveling around Europe, reading, and meeting people from
              all around the world.
            </li>
            <li>
              My goal is to gain relevant professional experience in every
              aspect of Web Development. I'm hoping to experience all roles
              required to develop and maintain a Web Application, so that one
              day I can start my own startup and create something truly unique,
              that helps others.
            </li>
          </ul>
        )}
        {about === "professional" && (
          <ul>
            <li>
              I started my professional career as a Frontend Developer Trainee
              at MOHAnet Mobilsystem, a startup located in Budapest developing
              remote management and big data systems. As a trainee, I learned
              how to use my previously acquired knowledge to take part in
              developing a web application for data visualization and
              administration of data-collecting devices.
            </li>
            <li>
              After finishing my Bachelor's I started working full-time at
              MOHAnet as a Frontend Developer. During my work, I was able to
              experience the whole software development cycle, from designing
              software to releasing it. I learned how to integrate code into an
              already existing codebase and create reusable libraries for
              in-company use.
            </li>
          </ul>
        )}
        {about === "education" && (
          <ul>
            <li>
              I finished my Bachelor's degree in Computer Science at ELTE, which
              is Hunagry's best university for this course. Here I decided to
              focus my studies on Software Development and I learned the basics
              of building, maintaining, developing, and applying
              software-oriented technological tools and systems alone or in
              teamwork.
            </li>
            <li>
              I later spent a year at the University of Copenhagen, where I
              further developed my reasoning and problem-solving skills, as well
              as deepened my understanding of algorithms, data structures, and
              programming language theory. I earned relevant experience in
              completing projects in an English-speaking academic setting.
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default About;
