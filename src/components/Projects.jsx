function Projects() {
  const projects = [
    {
      title: "Django E-commerce",
      description:
        "A full-stack e-commerce web application with product browsing, authentication, cart management and order functionality.",
      tech: ["Python", "Django", "SQLite", "Bootstrap"],
      github: "https://github.com/mehedi3635/E-commerce-",
      live: "#",
    },

    {
      title: "Hospital Management System",
      description:
        "A role-based hospital management system with separate functionality for admin, doctor, patient and receptionist.",
      tech: ["Python", "Django", "DRF", "PostgreSQL"],
      github: "#",
      live: "#",
    },

    {
      title: "Student Dashboard",
      description:
        "A responsive React dashboard for managing and displaying student-related information with reusable components.",
      tech: ["React", "JavaScript", "Bootstrap"],
      github: "#",
      live: "#",
    },

    {
      title: "Mini Task Manager",
      description:
        "A task management application built with React and JSONPlaceholder API for handling and displaying task data.",
      tech: ["React", "JavaScript", "REST API"],
      github: "#",
      live: "#",
    },

    {
      title: "Shopping Cart",
      description:
        "A responsive shopping cart application built with React featuring product selection, cart management and price calculation.",
      tech: ["React", "JavaScript", "Bootstrap"],
      github: "#",
      live: "#",
    },

    {
      title: "Personal Portfolio",
      description:
        "A modern responsive developer portfolio built with React and Bootstrap to showcase skills, experience and projects.",
      tech: ["React", "Bootstrap", "Vite"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="projects-section py-5"
    >
      <div className="container py-5">

        {/* Section Header */}

        <div className="text-center mb-5">

          <p className="section-subtitle">
            MY WORK
          </p>

          <h2 className="section-title">
            Featured Projects
          </h2>

          <p className="section-description">
            Some of the projects I have built while learning
            and developing my skills.
          </p>

        </div>


        {/* Projects */}

        <div className="row g-4">

          {projects.map((project, index) => (

            <div
              className="col-md-6 col-lg-4"
              key={index}
            >

              <div className="project-card h-100">

                {/* Project Image */}

                <div className="project-image">

                  <span>
                    {project.title}
                  </span>

                </div>


                {/* Project Content */}

                <div className="project-content">

                  <h3>
                    {project.title}
                  </h3>

                  <p>
                    {project.description}
                  </p>


                  {/* Technologies */}

                  <div className="project-tech">

                    {project.tech.map(
                      (technology, techIndex) => (

                        <span key={techIndex}>
                          {technology}
                        </span>

                      )
                    )}

                  </div>


                  {/* Buttons */}

                  <div className="project-buttons mt-4 gap-2">

                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-light btn-sm"
                      >
                        GitHub
                      </a>
                    )}

                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        Live Demo
                      </a>
                    )}

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