function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          {/* Hero Content */}
          <div className="col-lg-7">

            <p className="hero-subtitle mb-3">
              Hi, I'm
            </p>

            <h1 className="display-2 fw-bold mb-3">
              Mehedi Hasan
            </h1>

            <h2 className="hero-title mb-4">
              Web Developer
            </h2>

            <p className="lead text-secondary mb-4">
              I build modern, responsive and user-friendly
              web applications using React, Python and Django.
            </p>

            {/* Buttons */}
            <div className="d-flex flex-wrap gap-3">

              <a
                href="#projects"
                className="btn btn-primary btn-lg px-4"
              >
                View My Work
              </a>

              <a
                href="/Mehedi_Hasan_CV.pdf"
                className="btn btn-outline-light btn-lg px-4"
                download
              >
                Download CV
              </a>

            </div>

            {/* Social Links */}
            <div className="social-links mt-5">

              <a
                href="https://github.com/mehedi3635"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none me-4"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/mehedi-hassan3635/"
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none me-4"
              >
                LinkedIn
              </a>

              <a
                href="mailto:mh95211@gmail.com"
                className="text-decoration-none"
              >
                Email
              </a>

            </div>

          </div>

          {/* Profile Image */}
          <div className="col-lg-5 text-center mt-5 mt-lg-0">

            <div className="hero-image-wrapper">

              <div className="hero-image-placeholder">
                MH
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;