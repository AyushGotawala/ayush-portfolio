const Contact = () => {
  return (
    <>
      <section id="contact" className="section">
        <h2 className="section-title" data-aos="fade-up" data-aos-duration="1000">
          Let's Connect
        </h2>
        <div className="contact-container">
          <div
            className="contact-info"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h3>Interested in working together? Let's connect.</h3>
            <p style={{ color: "var(--text-secondary)", marginBottom: "2rem" }}>
              I'm always open to discussing new opportunities, interesting
              projects, or just having a chat about technology.
            </p>

            <div style={{ marginBottom: "2rem" }}>
              <p>
                <i
                  className="fas fa-envelope"
                  style={{ color: "var(--primary-color)", marginRight: "1rem" }}
                ></i>
                ayush.gotawala.dev@gmail.com
              </p>
              <p>
                <i
                  className="fas fa-phone"
                  style={{ color: "var(--primary-color)", marginRight: "1rem" }}
                ></i>
                +91 98241 17922
              </p>
              <p>
                <i
                  className="fas fa-map-marker-alt"
                  style={{ color: "var(--primary-color)", marginRight: "1rem" }}
                ></i>
                Bengaluru, India
              </p>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/ayush-gotawala-8b374930b/" className="social-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/AyushGotawala" className="social-link">
                <i className="fab fa-github"></i>
              </a>
            <a href="https://leetcode.com/u/AYUSH_GOTAWALA/" className="social-link leetcode-link" target="_blank" rel="noopener noreferrer">
              <svg width="32" height="32" viewBox="0 0 95 111" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                <path d="M68.0063 83.0664C70.5 80.5764 74.5366 80.5829 77.0223 83.0809C79.508 85.579 79.5015 89.6226 77.0078 92.1127L65.9346 103.17C55.7187 113.371 39.06 113.519 28.6718 103.513C28.6117 103.456 23.9861 98.9201 8.72653 83.957C-1.42528 74.0029 -2.43665 58.0749 7.11648 47.8464L24.9282 28.7745C34.4095 18.6219 51.887 17.5122 62.7275 26.2789L78.9048 39.362C81.6444 41.5776 82.0723 45.5985 79.8606 48.3429C77.6488 51.0873 73.635 51.5159 70.8954 49.3003L54.7182 36.2173C49.0488 31.6325 39.1314 32.2622 34.2394 37.5006L16.4274 56.5727C11.7767 61.5522 12.2861 69.574 17.6456 74.8292C28.851 85.8169 37.4869 94.2846 37.4969 94.2942C42.8977 99.496 51.6304 99.4184 56.9331 94.1234L68.0063 83.0664Z" fill="#FFA116"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M41.1067 72.0014C37.5858 72.0014 34.7314 69.1421 34.7314 65.615C34.7314 62.0879 37.5858 59.2286 41.1067 59.2286H88.1245C91.6454 59.2286 94.4997 62.0879 94.4997 65.615C94.4997 69.1421 91.6454 72.0014 88.1245 72.0014H41.1067Z" fill="#B3B3B3"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M49.9118 2.02335C52.3173 -0.55232 56.3517 -0.686894 58.9228 1.72277C61.494 4.13244 61.6284 8.17385 59.2229 10.7495L16.4276 56.5729C11.7768 61.552 12.2861 69.5738 17.6453 74.8292L37.4088 94.2091C39.9249 96.6764 39.968 100.72 37.505 103.24C35.042 105.761 31.0056 105.804 28.4895 103.337L8.72593 83.9567C-1.42529 74.0021 -2.43665 58.0741 7.1169 47.8463L49.9118 2.02335Z" fill="black"></path>
              </svg>
            </a>
              
            </div>
          </div>

          <form
            className="contact-form"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
