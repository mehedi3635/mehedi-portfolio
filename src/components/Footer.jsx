function Footer() {
  return (
    <footer className="footer-section py-4">

      <div className="container">

        <div className="row align-items-center">

          <div className="col-md-6">

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


          <div className="col-md-6">

            <div className="footer-social">

              <a
                href="https://github.com/mehedi3635"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/"
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

        <hr className="footer-divider my-4" />

        <div className="text-center">

          <p className="text-secondary mb-0">
            © {new Date().getFullYear()} Mehedi Hasan.
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;