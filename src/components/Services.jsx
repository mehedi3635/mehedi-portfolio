function Services() {
  const services = [
    {
      icon: "</>",
      title: "Web Design",
      description:
        "Modern and clean website designs with responsive layouts and user-friendly interfaces.",
    },
    {
      icon: "⚛",
      title: "React Development",
      description:
        "Interactive and responsive web applications built with React.js and modern frontend practices.",
    },
    {
      icon: "Py",
      title: "Django Development",
      description:
        "Secure and scalable backend applications using Python and Django.",
    },
    {
      icon: "API",
      title: "REST API Development",
      description:
        "Build and integrate REST APIs using Django REST Framework for modern web applications.",
    },
    {
      icon: "↔",
      title: "Responsive Websites",
      description:
        "Websites that work smoothly across desktop, tablet and mobile devices.",
    },
    {
      icon: "B",
      title: "Business Websites",
      description:
        "Professional websites for businesses, organizations and personal brands.",
    },
  ];

  return (
    <section id="services" className="services-section py-5">
      <div className="container py-5">

        {/* Section Header */}
        <div className="text-center mb-5">

          <p className="section-subtitle">
            WHAT I DO
          </p>

          <h2 className="section-title">
            My Services
          </h2>

          <p className="text-secondary mt-3">
            I help businesses and individuals build modern,
            responsive and functional web applications.
          </p>

        </div>

        {/* Services */}
        <div className="row g-4">

          {services.map((service, index) => (
            <div
              className="col-md-6 col-lg-4"
              key={index}
            >

              <div className="service-card h-100">

                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>
                  {service.title}
                </h3>

                <p className="text-secondary mb-0">
                  {service.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;