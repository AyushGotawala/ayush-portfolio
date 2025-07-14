const Skills = () => {
  return (
    <>
      <section id="skills" className="section">
        <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000">
          Skills & Technologies
        </h2>
        <div className="skills-container">
          <div
            className="skill-category"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h3>Programming Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">C</span>
              <span className="skill-tag">C++</span>
              <span className="skill-tag">TypeScript</span>
            </div>
          </div>
          <div
            className="skill-category"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <h3>Frameworks & Libraries</h3>
            <div className="skill-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">React</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">MySQL</span>
            </div>
          </div>
          <div
            className="skill-category"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <h3>Tools & Other</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Git Hub</span>
              {/* <span className="skill-tag">Docker</span> */}
              <span className="skill-tag">Postman</span>
              {/* <span className="skill-tag">AWS</span> */}
              {/* <span className="skill-tag">Linux</span> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
