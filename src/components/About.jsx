function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container py-5">

        {/* Section Title */}
        <div className="text-center mb-5">
          <p className="section-subtitle">ABOUT ME</p>

          <h2 className="section-title">
            Get to Know Me
          </h2>
        </div>

        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-5 mb-4 mb-lg-0">

            <div className="about-card">
              <div className="about-icon">
                &lt;/&gt;
              </div>

              <h3 className="mt-4">
                Web Developer
              </h3>

              <p className="text-secondary">
                Passionate about creating modern and
                user-friendly web applications.
              </p>
            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-7">

            <h3 className="mb-4">
              I'm Mehedi Hasan
            </h3>

            <p className="text-secondary">
              I'm a Web Developer passionate about building
              modern, responsive and user-friendly web
              applications.
            </p>

            <p className="text-secondary">
              I work with React.js for frontend development
              and Python with Django for backend development.
              I also have experience working with REST APIs,
              databases and Git/GitHub.
            </p>

            <p className="text-secondary">
              I continuously improve my skills by building
              real-world projects and learning modern web
              development technologies.
            </p>

            {/* Info */}
            <div className="row mt-4">

              <div className="col-sm-6 mb-3">
                <strong>Name:</strong>
                <br />
                <span className="text-secondary">
                  Mehedi Hasan
                </span>
              </div>

              <div className="col-sm-6 mb-3">
                <strong>Role:</strong>
                <br />
                <span className="text-secondary">
                  Web Developer
                </span>
              </div>

              <div className="col-sm-6 mb-3">
                <strong>Email:</strong>
                <br />
                <span className="text-secondary">
                  mh95211@gmail.com
                </span>
              </div>

              <div className="col-sm-6 mb-3">
                <strong>Location:</strong>
                <br />
                <span className="text-secondary">
                  Dhaka, Bangladesh
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;