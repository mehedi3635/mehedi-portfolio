function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">

          {/* Left Content */}
          <div className="col-lg-7">

            <div className="hero-content">

              <p className="hero-greeting">
                Hi, I'm
              </p>

              <h1 className="hero-name">
                Mehedi Hasan
              </h1>

              <h2 className="hero-role">
                Full Stack Web Developer
              </h2>

              <p className="hero-description">
                I build modern, responsive and user-friendly
                web applications using React, Python and Django.
              </p>

              {/* Buttons */}
              <div className="hero-buttons">

                <a
                  href="#projects"
                  className="btn btn-primary hero-btn"
                >
                  View My Work
                </a>

                <a
                  href="/Mehedi_Hasan_CV.pdf"
                  className="btn btn-outline-light hero-btn"
                  download
                >
                  Download CV
                </a>

              </div>

              {/* Social Links */}
              <div className="hero-social">

                <a
                  href="https://github.com/mehedi3635"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <span>•</span>

                <a
                  href="https://www.linkedin.com/in/mehedi-hassan3635/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>

                <span>•</span>

                <a href="mailto:mh95211@gmail.com">
                  Email
                </a>

              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="col-lg-5">

            <div className="hero-image-wrapper">

              <div className="hero-image-ring">

                <img
                  src="/profile.jpg"
                  alt="Mehedi Hasan"
                  className="hero-profile-image"
                />

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;