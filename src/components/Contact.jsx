function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container py-5">

        {/* Section Header */}
        <div className="text-center mb-5">

          <p className="section-subtitle">
            GET IN TOUCH
          </p>

          <h2 className="section-title">
            Contact Me
          </h2>

          <p className="section-description">
            Have a project in mind or want to work together?
            Feel free to get in touch with me.
          </p>

        </div>

        <div className="row g-4">

          {/* Contact Information */}
          <div className="col-lg-5">

            <div className="contact-info h-100">

              <h3 className="mb-4">
                Let's Talk
              </h3>

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

              <div className="contact-item">

                <div className="contact-icon">
                  ☎
                </div>

                <div>
                  <h5>Phone</h5>

                  <a href="tel:+8801993330036">
                    +880 1993-330036
                  </a>
                </div>

              </div>

              <div className="contact-item">

                <div className="contact-icon">
                  in
                </div>

                <div>
                  <h5>LinkedIn</h5>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn Profile
                  </a>
                </div>

              </div>

              <div className="contact-item mb-0">

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

            </div>

          </div>


          {/* Contact Form */}
          <div className="col-lg-7">

            <div className="contact-form">

              <form>

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
                      className="form-control"
                      id="name"
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
                      className="form-control"
                      id="email"
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
                      className="form-control"
                      id="subject"
                      placeholder="Project subject"
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
                      className="form-control"
                      id="message"
                      rows="6"
                      placeholder="Write your message..."
                    ></textarea>

                  </div>


                  <div className="col-12">

                    <button
                      type="submit"
                      className="btn btn-primary px-4 py-2"
                    >
                      Send Message
                    </button>

                  </div>

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;