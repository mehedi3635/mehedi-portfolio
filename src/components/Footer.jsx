function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">

        <div className="row align-items-center py-4">

          {/* Brand */}
          <div className="col-md-6 text-center text-md-start">
            <a
              href="#home"
              className="footer-brand"
            >
              Mehedi<span>.</span>
            </a>

            <p className="text-secondary mb-0 mt-2">
              Web Developer | React | Python | Django
            </p>
          </div>

          {/* Social Links */}
          <div className="col-md-6 mt-3 mt-md-0">

            <div className="footer-social text-center text-md-end">

              <a
                href="https://github.com/mehedi3635"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/mehedi-hassan3635/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a href="mailto:mh95211@gmail.com">
                Email
              </a>

            </div>

          </div>

        </div>

        <hr className="footer-divider" />

        <div className="text-center py-3">

          <p className="text-secondary mb-0">
            © 2026 Mehedi Hasan. All Rights Reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;