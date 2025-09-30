import { useState, useEffect } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentPhase, setCurrentPhase] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const texts = [
    "Ayush Gotawala",
    "Backend Developer",
    "Problem Solver", 
    "Full Stack Enthusiast"
  ];

  useEffect(() => {
    let timeoutId;
    
    const startTyping = () => {
      if (currentPhase >= texts.length) {
        setIsComplete(true);
        setTimeout(() => setShowCursor(false), 2000);
        return;
      }

      const currentText = texts[currentPhase];
      let charIndex = 0;
      
      const typeCharacter = () => {
        if (charIndex <= currentText.length) {
          setDisplayText(currentText.slice(0, charIndex));
          charIndex++;
          timeoutId = setTimeout(typeCharacter, 100 + Math.random() * 50);
        } else {
          // Text complete, pause then move to next
          timeoutId = setTimeout(() => {
            if (currentPhase === 0) {
              setCurrentPhase(1);
              setDisplayText('');
            } else if (currentPhase < texts.length - 1) {
              setCurrentPhase(prev => prev + 1);
              setDisplayText('');
            } else {
              setIsComplete(true);
              setTimeout(() => setShowCursor(false), 2000);
            }
          }, currentPhase === 0 ? 1500 : 2000);
        }
      };

      // Start typing after a delay
      timeoutId = setTimeout(typeCharacter, currentPhase === 0 ? 1000 : 500);
    };

    startTyping();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [currentPhase]);

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
          <div
            className="hero-image"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <i className="fas fa-code"></i>
          </div>
          <h1
            className="hero-title"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {currentPhase === 0 ? (
              <>
                Hi, I'm <span className="typing-text">{displayText}<span className="cursor">|</span></span>
              </>
            ) : (
              <>
                Hi, I'm <span className="typed-complete">Ayush Gotawala</span>
              </>
            )}
          </h1>
          <p
            className="hero-subtitle"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            {currentPhase > 0 && (
              <span className="typing-text">
                {displayText}{!isComplete && <span className="cursor">|</span>}
              </span>
            )}
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
