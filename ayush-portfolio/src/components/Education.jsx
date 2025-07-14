const Education = () =>{
    return(
        <>
    <section id="education" className="section">
        <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000">Education</h2>
        <div className="about-content">
            <div className="stat-card" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                <h3 style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>Bachelor of Computer Application</h3>
                <p><strong>BCA</strong></p>
                <p>Veer Narmad South Gujrat University | 2020 - 2024</p>
                <br />
            </div>
            <div className="about-stats" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                <div className="stat-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">
                    <div className="stat-number">7.95</div>
                    <div>CGPA</div>
                </div>
            </div>
        </div>
        <div className="about-content">
            <div className="stat-card" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200">
                <h3 style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>Master of Computer Application</h3>
                <p><strong>MCA</strong></p>
                <p>PES University | 2024 - 2026</p>
            </div>
            <div className="about-stats" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                <div className="stat-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">
                    <div className="stat-number">8.00</div>
                    <div>CGPA</div>
                </div>
            </div>
        </div>
    </section>
    </>
    );
}

export default Education;