function Projects() {
  const projects = [
    {
      title: "Django E-commerce",
      description:
        "A full-featured e-commerce application with product browsing, authentication, cart and order management.",
      technologies: ["Python", "Django", "MySQL", "Bootstrap"],
      github: "https://github.com/mehedi3635/E-commerce-",
      live: "#",
    },
    {
      title: "Hospital Management System",
      description:
        "A role-based hospital management system designed for administrators, doctors, patients and receptionists.",
      technologies: ["Python", "Django", "DRF", "MySQL"],
      github: "#",
      live: "#",
    },
    {
      title: "Student Dashboard",
      description:
        "A responsive React dashboard interface for managing and displaying student information.",
      technologies: ["React.js", "JavaScript", "Bootstrap"],
      github: "#",
      live: "#",
    },
    {
      title: "Mini Task Manager",
      description:
        "A task management application using React and a REST API for creating and managing tasks.",
      technologies: ["React.js", "JavaScript", "REST API"],
      github: "#",
      live: "#",
    },
    {
      title: "Shopping Cart",
      description:
        "A responsive shopping cart application built with React for managing products and cart items.",
      technologies: ["React.js", "JavaScript", "Bootstrap"],
      github: "#",
      live: "#",
    },
    {
      title: "React Router Project",
      description:
        "A React application demonstrating client-side routing and navigation between different pages.",
      technologies: ["React.js", "React Router", "Bootstrap"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <div className="container py-5">

        {/* Section Header */}
        <div className="text-center mb-5">

          <p className="section-subtitle">
            MY PROJECTS
          </p>

          <h2 className="section-title">
            Featured Projects
          </h2>

          <p className="text-secondary mt-3">
            Some of the projects I have built while
            learning and practicing web development.
          </p>

        </div>

        {/* Project Cards */}
        <div className="row g-4">

          {projects.map((project, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={index}
            >

              <div className="project-card h-100">

                {/* Image Placeholder */}
                <div className="project-image">
                  <span>Project {index + 1}</span>
                </div>

                {/* Content */}
                <div className="project-content">

                  <h3>
                    {project.title}
                  </h3>

                  <p className="text-secondary">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="project-tech">

                    {project.technologies.map(
                      (technology, techIndex) => (
                        <span key={techIndex}>
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                  {/* Buttons */}
                  <div className="project-buttons mt-4">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-light btn-sm me-2"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary btn-sm"
                    >
                      Live Demo
                    </a>

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;