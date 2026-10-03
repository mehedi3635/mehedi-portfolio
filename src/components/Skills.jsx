function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "⚛",
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
      icon: "⚙",
      skills: [
        "Python",
        "Django",
        "Django REST Framework",
      ],
    },
    {
      title: "Database",
      icon: "🗄",
      skills: [
        "MySQL",
        "PostgreSQL",
      ],
    },
    {
      title: "Tools",
      icon: "🛠",
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

        <div className="text-center mb-5">
          <p className="section-subtitle">
            MY SKILLS
          </p>

          <h2 className="section-title">
            Technologies I Work With
          </h2>

          <p className="section-description">
            Technologies and tools I use to build modern
            web applications.
          </p>
        </div>

        <div className="row g-4">

          {skillCategories.map((category, index) => (
            <div
              className="col-md-6 col-lg-3"
              key={index}
            >
              <div className="skill-card h-100">

                <div className="skill-icon">
                  {category.icon}
                </div>

                <h3 className="skill-category-title">
                  {category.title}
                </h3>

                <div className="skill-list">

                  {category.skills.map(
                    (skill, skillIndex) => (
                      <span
                        className="skill-badge"
                        key={skillIndex}
                      >
                        {skill}
                      </span>
                    )
                  )}

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