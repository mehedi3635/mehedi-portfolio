import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container">

        {/* Brand */}
        <a
          className="navbar-brand custom-brand"
          href="#home"
          onClick={closeMenu}
        >
          Mehedi<span>.</span>
        </a>

        {/* Mobile Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div
          className={`collapse navbar-collapse ${
            isOpen ? "show" : ""
          }`}
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item">
              <a
                className="nav-link"
                href="#home"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                onClick={closeMenu}
              >
                About
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#skills"
                onClick={closeMenu}
              >
                Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#experience"
                onClick={closeMenu}
              >
                Experience
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#education"
                onClick={closeMenu}
              >
                Education
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#services"
                onClick={closeMenu}
              >
                Services
              </a>
            </li>

            <li className="nav-item ms-lg-3">
              <a
                className="nav-link contact-nav-btn"
                href="#contact"
                onClick={closeMenu}
              >
                Let's Talk
              </a>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;