function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "React.js",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Python",
        "Django",
        "Django REST Framework",
      ],
    },
    {
      title: "Database",
      skills: [
        "MySQL",
        "PostgreSQL",
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Vite",
        "REST API",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section py-5">
      <div className="container py-5">

        {/* Section Header */}
        <div className="text-center mb-5">
          <p className="section-subtitle">
            MY SKILLS
          </p>

          <h2 className="section-title">
            Technologies I Work With
          </h2>

          <p className="text-secondary mt-3">
            I use modern web technologies to build
            responsive and scalable applications.
          </p>
        </div>

        {/* Skills */}
        <div className="row g-4">

          {skillCategories.map((category, index) => (
            <div
              className="col-md-6 col-lg-3"
              key={index}
            >
              <div className="skill-card h-100">

                <h3 className="skill-category-title">
                  {category.title}
                </h3>

                <div className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      className="skill-item"
                      key={skillIndex}
                    >
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;