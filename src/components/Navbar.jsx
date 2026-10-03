import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand fw-bold fs-4" href="#home">
          Mehedi<span className="text-primary">.</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

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
                href="#education"
                onClick={closeMenu}
              >
                Education
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
                href="#services"
                onClick={closeMenu}
              >
                Services
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
                href="#contact"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>

          </ul>

          {/* Contact Button */}
          <a
            href="#contact"
            className="btn btn-primary ms-lg-3"
            onClick={closeMenu}
          >
            Let's Talk
          </a>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;