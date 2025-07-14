const Project = () => {
  return (
    <>
      <section id="projects" className="section">
        <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000">
          Featured Projects
        </h2>
        <div className="projects-grid">
          <div
            className="project-card"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="project-image">
              <i className="fas fa-shopping-cart"></i>
            </div>
            <div className="project-content">
              <h3 className="project-title">E-Commerce API</h3>
              <p className="project-description">
                A comprehensive REST API for e-commerce platform with user
                authentication, product management, and order processing
                capabilities.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Express</span>
                <span className="tech-tag">MongoDB</span>
                <span className="tech-tag">JWT</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a href="#" className="project-link">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-card"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="project-image">
              <i className="fas fa-comments"></i>
            </div>
            <div className="project-content">
              <h3 className="project-title">Real-time Chat App</h3>
              <p className="project-description">
                A real-time messaging application with Socket.io integration,
                featuring group chats, file sharing, and user presence
                indicators.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Socket.io</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Redis</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a href="#" className="project-link">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>

          <div
            className="project-card"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <div className="project-image">
              <i className="fas fa-tasks"></i>
            </div>
            <div className="project-content">
              <h3 className="project-title">Task Management System</h3>
              <p className="project-description">
                A collaborative task management platform with role-based access
                control, deadline tracking, and team collaboration features.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Django</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Docker</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
                <a href="#" className="project-link">
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;