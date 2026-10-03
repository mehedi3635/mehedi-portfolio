function Education() {
  const education = [
    {
      year: "2026 — Present",
      title: "MBA",
      institute: "Ongoing",
      subject: "Accounting ",
    },
    {
      year: "2025",
      title: "BBA",
      institute: "Abujar Gifari College",
      subject: "Accounting",
    },
    {
      year: "2025",
      title: "NSDA Level 4",
      institute: "Daffodil Polytechnic Institute",
      subject: "Web Application Development with Python",
    },
    {
      year: "2025",
      title: "NSDA Level 3",
      institute: "European IT Institute",
      subject: "Web Design and Development for Freelancing",
    },
  ];

  return (
    <section id="education" className="education-section py-5">
      <div className="container py-5">

        <div className="text-center mb-5">
          <p className="section-subtitle">
            EDUCATION & CERTIFICATIONS
          </p>

          <h2 className="section-title">
            My Learning Journey
          </h2>
        </div>

        <div className="row g-4">

          {education.map((item, index) => (
            <div className="col-md-6" key={index}>

              <div className="education-card h-100">

                <span className="education-year">
                  {item.year}
                </span>

                <h3>
                  {item.title}
                </h3>

                <h5>
                  {item.institute}
                </h5>

                <p className="text-secondary mb-0">
                  {item.subject}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;