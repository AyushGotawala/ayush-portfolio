const About = () => {
  return (
    <>
      <section id="about" className="section">
        <h2
          className="section-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          About Me
        </h2>
        <div className="about-content">
          <div
            className="about-text"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <p>
              I'm a passionate backend developer with a strong foundation in
              modern web technologies and a drive for creating efficient,
              scalable solutions. My mission is to build robust systems that
              solve real-world problems while continuously learning and adapting
              to emerging technologies.
            </p>
            <br />
            <p>
              When I'm not coding, you'll find me exploring new programming
              languages, contributing to open-source projects, or playing chess
              to keep my strategic thinking sharp. I believe in the power of
              clean code and collaborative development.
            </p>
          </div>
          <div
            className="about-stats"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div
              className="stat-card"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <div className="stat-number">2+</div>
              <div>Projects Completed</div>
            </div>
            {/* <div
              className="stat-card"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="700"
            >
              <div className="stat-number">2+</div>
              <div>Years Experience</div>
            </div> */}
            <div
              className="stat-card"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <div className="stat-number">10+</div>
              <div>Technologies</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
