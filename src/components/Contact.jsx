function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container py-5">

        {/* Section Header */}
        <div className="text-center mb-5">

          <p className="section-subtitle">
            CONTACT ME
          </p>

          <h2 className="section-title">
            Let's Work Together
          </h2>

          <p className="text-secondary mt-3">
            Have a project in mind? Feel free to get in touch
            with me.
          </p>

        </div>

        <div className="row g-5 align-items-start">

          {/* Contact Information */}
          <div className="col-lg-5">

            <div className="contact-info">

              <h3 className="mb-4">
                Get In Touch
              </h3>

              <p className="text-secondary mb-4">
                I'm always open to discussing web development
                projects, freelance opportunities and new ideas.
              </p>

              {/* Email */}
              <div className="contact-item">
                <div className="contact-icon">
                  @
                </div>

                <div>
                  <h5>Email</h5>

                  <a href="mailto:mh95211@gmail.com">
                    mh95211@gmail.com
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="contact-item">
                <div className="contact-icon">
                  GH
                </div>

                <div>
                  <h5>GitHub</h5>

                  <a
                    href="https://github.com/mehedi3635"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/mehedi3635
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="contact-item">
                <div className="contact-icon">
                  in
                </div>

                <div>
                  <h5>LinkedIn</h5>

                  <a
                    href="https://www.linkedin.com/in/mehedi-hassan3635/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="col-lg-7">

            <form className="contact-form">

              <div className="row g-3">

                <div className="col-md-6">
                  <label
                    htmlFor="name"
                    className="form-label"
                  >
                    Your Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="col-md-6">
                  <label
                    htmlFor="email"
                    className="form-label"
                  >
                    Your Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="col-12">
                  <label
                    htmlFor="subject"
                    className="form-label"
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    id="subject"
                    className="form-control"
                    placeholder="Enter subject"
                  />
                </div>

                <div className="col-12">
                  <label
                    htmlFor="message"
                    className="form-label"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="6"
                    className="form-control"
                    placeholder="Write your message..."
                  ></textarea>
                </div>

                <div className="col-12">
                  <button
                    type="button"
                    className="btn btn-primary btn-lg px-4"
                  >
                    Send Message
                  </button>
                </div>

              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;