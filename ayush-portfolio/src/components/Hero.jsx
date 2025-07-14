const Hero = () => {
  return (
    <>
      <section id="home" className="hero">
        <div className="floating-shapes">
          <svg
            className="shape"
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="currentColor"
          >
            <circle
              cx="30"
              cy="30"
              r="25"
              stroke="var(--primary-color)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
          <svg
            className="shape"
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="currentColor"
          >
            <rect
              x="10"
              y="10"
              width="60"
              height="60"
              stroke="var(--secondary-color)"
              strokeWidth="2"
              fill="none"
              transform="rotate(45 40 40)"
            />
          </svg>
          <svg
            className="shape"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="currentColor"
          >
            <polygon
              points="35,5 65,55 5,55"
              stroke="var(--accent-color)"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
        <div className="hero-container">
          <div className="hero-image" data-aos="zoom-in" data-aos-duration="1000">
            <i className="fas fa-code"></i>
          </div>
          <h1
            className="hero-title"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            Hi, I'm Ayush Gotawala
          </h1>
          <p
            className="hero-subtitle"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            Backend Developer | Problem Solver | Tech Enthusiast
          </p>
          <div
            className="cta-buttons"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <a href="#contact" className="btn btn-primary">
              Download Resume
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;