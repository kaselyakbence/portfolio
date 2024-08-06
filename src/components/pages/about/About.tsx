import "./about.scss";

const About = () => {
  return (
    <div className="about-page">
      <div className="card">
        <div className="card-left">
          <h1 className="about-header">Living in Berlin, Germany</h1>
          <p className="about-info">
            I’m a Software Developer currently living in Berlin. I specialize in
            Web development with Typescript and React, but I also have
            experience with other languages and tools like Python or Java.
          </p>
          <div className="line" />
          <ul>
            <li>Personal goals</li>
            <li>Professional experience</li>
            <li>Academic experience</li>
          </ul>
        </div>
        <div className="card-right"></div>
      </div>
    </div>
  );
};

export default About;
