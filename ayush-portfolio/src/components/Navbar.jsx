import { useEffect } from "react";

const Navbar = () => {
  function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    body.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }

  const loadTheme = () =>{
    const savedTheme = localStorage.getItem("theme") || "light";
    document.body.setAttribute("data-theme", savedTheme);
  }

  useEffect(() => {
    loadTheme();
  }, []);

  // Mobile Menu Functionality
        const toggleMobileMenu = () => {
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.toggle('active');
        }

        const closeMobileMenu = () =>{
            const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.classList.remove('active');
        }

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">AYUSH.DEV</div>
          <ul className="nav-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="theme-toggle" onClick={toggleTheme}>
            <i className="fas fa-sun theme-icon sun-icon"></i>
            <i className="fas fa-moon theme-icon moon-icon"></i>
          </div>
          <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="mobile-menu" id="mobileMenu">
          <ul className="mobile-nav-links">
            <li>
              <a href="#home" onClick={closeMobileMenu}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={closeMobileMenu}>About</a>
            </li>
            <li>
              <a href="#skills" onClick={closeMobileMenu}>Skills</a>
            </li>
            <li>
              <a href="#projects" onClick={closeMobileMenu}>Projects</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMobileMenu}>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;