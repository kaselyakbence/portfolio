import "./about.scss";

const About = () => {
  return (
    <div className="about-page">
      <div className="card">
        <p className="about-info">Living in Berlin, Germany</p>
        <p className="about-info">
          I build web complex application with the help of modern frameworks and
          test complex software solutions.
        </p>
        <ul>
          <li>Personal goals</li>
          <li>Professional experience</li>
          <li>Academic experience</li>
        </ul>
      </div>
      <div className="card"></div>
    </div>
  );
};

export default About;
