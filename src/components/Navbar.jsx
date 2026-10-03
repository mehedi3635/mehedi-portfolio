import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Projects", id: "projects" },
    { name: "Services", id: "services" },
  ];

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">

        <a
          className="navbar-brand custom-brand"
          href="#home"
        >
          Mehedi<span>.</span>
        </a>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolioNavbar"
          aria-controls="portfolioNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div
          className="collapse navbar-collapse"
          id="portfolioNavbar"
        >

          <ul className="navbar-nav ms-auto align-items-lg-center">

            {navItems.map((item) => (
              <li
                className="nav-item"
                key={item.id}
              >
                <a
                  href={`#${item.id}`}
                  className={`nav-link ${
                    activeSection === item.id
                      ? "active"
                      : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}


            <li className="nav-item ms-lg-2">

              <a
                href="#contact"
                className="nav-link contact-nav-btn"
              >
                Contact
              </a>

            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;