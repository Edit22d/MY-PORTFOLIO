import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setShowAlert(true);
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);

    setTimeout(() => setShowAlert(false), 5000);
  };

  const contactInfo = {
    email: "patrickowino002@gmail.com",
    whatsapp: "+256 759 899 496",
    linkedin: "https://linkedin.com/in/patrick-owino-9a5b5a2b4/",
    twitter: "https://twitter.com/PatrickOwino01",
    instagram: "https://instagram.com/_.patrickowino"
  };

  return (
    <section
      id="contact"
      style={{
        padding: "100px 0",
        background: "linear-gradient(135deg, #0a192f 0%, #172a45 100%)",
        minHeight: "100vh",
        color: "#e6f1ff",
        position: "relative"
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.03) 0%, transparent 50%)`,
          pointerEvents: "none"
        }}
      ></div>

      <Container>
        {/* Header Section */}
        <Row className="mb-5">
          <Col lg={12}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h6
                style={{
                  color: "#64ffda",
                  fontSize: "1.1rem",
                  fontWeight: "400",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "1rem"
                }}
              >
                Get In Touch
              </h6>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  background: "linear-gradient(45deg, #e6f1ff 0%, #64ffda 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Contact Me
              </h2>
              <p
                style={{
                  color: "#8892b0",
                  fontSize: "1.1rem",
                  maxWidth: "600px",
                  margin: "0 auto"
                }}
              >
                I'm always open to discussing new opportunities, creative
                projects, or potential collaborations. Feel free to reach out
                through any of the platforms below.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Contact Form */}
          <Col lg={6}>
            <Card
              style={{
                border: "1px solid rgba(100, 255, 218, 0.1)",
                borderRadius: "15px",
                backgroundColor: "rgba(10, 25, 47, 0.5)",
                backdropFilter: "blur(10px)",
                height: "100%",
                transition: "all 0.3s ease",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.borderColor = "#64ffda";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(100, 255, 218, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor =
                  "rgba(100, 255, 218, 0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Card.Body style={{ padding: "2rem" }}>
                <div className="d-flex align-items-center mb-4">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "rgba(100, 255, 218, 0.1)",
                      border: "1px solid rgba(100, 255, 218, 0.3)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "15px",
                      fontSize: "1.3rem",
                      color: "#64ffda"
                    }}
                  >
                    ✉️
                  </div>
                  <h4
                    style={{
                      fontWeight: "600",
                      color: "#e6f1ff",
                      margin: 0,
                      fontSize: "1.3rem"
                    }}
                  >
                    Send Me a Message
                  </h4>
                </div>

                {showAlert && (
                  <Alert
                    variant="success"
                    className="mb-4 border-0"
                    style={{
                      borderRadius: "10px",
                      background: "rgba(100, 255, 218, 0.1)",
                      color: "#64ffda",
                      border: "1px solid rgba(100, 255, 218, 0.3)"
                    }}
                  >
                    ✅ Thank you for your message! I'll get back to you soon.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        color: "#e6f1ff",
                        marginBottom: "8px"
                      }}
                    >
                      Full Name *
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      style={{
                        borderRadius: "10px",
                        padding: "12px 15px",
                        border: "1px solid rgba(100, 255, 218, 0.2)",
                        background: "rgba(10, 25, 47, 0.3)",
                        color: "#e6f1ff",
                        transition: "all 0.3s ease"
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#64ffda";
                        e.target.style.boxShadow =
                          "0 0 0 0.2rem rgba(100, 255, 218, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor =
                          "rgba(100, 255, 218, 0.2)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        color: "#e6f1ff",
                        marginBottom: "8px"
                      }}
                    >
                      Email Address *
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                      style={{
                        borderRadius: "10px",
                        padding: "12px 15px",
                        border: "1px solid rgba(100, 255, 218, 0.2)",
                        background: "rgba(10, 25, 47, 0.3)",
                        color: "#e6f1ff",
                        transition: "all 0.3s ease"
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#64ffda";
                        e.target.style.boxShadow =
                          "0 0 0 0.2rem rgba(100, 255, 218, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor =
                          "rgba(100, 255, 218, 0.2)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label
                      style={{
                        fontWeight: "600",
                        color: "#e6f1ff",
                        marginBottom: "8px"
                      }}
                    >
                      Message *
                    </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      required
                      style={{
                        borderRadius: "10px",
                        padding: "12px 15px",
                        border: "1px solid rgba(100, 255, 218, 0.2)",
                        background: "rgba(10, 25, 47, 0.3)",
                        color: "#e6f1ff",
                        transition: "all 0.3s ease",
                        resize: "vertical"
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "#64ffda";
                        e.target.style.boxShadow =
                          "0 0 0 0.2rem rgba(100, 255, 218, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor =
                          "rgba(100, 255, 218, 0.2)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid #64ffda",
                        color: "#64ffda",
                        fontWeight: "500",
                        padding: "15px",
                        borderRadius: "10px",
                        fontSize: "1.1rem",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "#64ffda";
                        e.target.style.color = "#0a192f";
                        e.target.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "transparent";
                        e.target.style.color = "#64ffda";
                        e.target.style.transform = "translateY(0)";
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" />
                          Sending...
                        </>
                      ) : (
                        "📨 Send Message"
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

         
          <Col lg={6}>
            <Card
              style={{
                border: "1px solid rgba(100, 255, 218, 0.1)",
                borderRadius: "15px",
                backgroundColor: "rgba(10, 25, 47, 0.5)",
                backdropFilter: "blur(10px)",
                height: "100%",
                transition: "all 0.3s ease",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#64ffda";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(100, 255, 218, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  "rgba(100, 255, 218, 0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Card.Body style={{ padding: "2rem" }}>
                
                <div
                  className="d-flex align-items-center mb-4 p-3"
                  style={{
                    background: "rgba(100, 255, 218, 0.05)",
                    borderRadius: "10px",
                    border: "1px solid rgba(100, 255, 218, 0.1)",
                    transition: "all 0.3s ease"
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "rgba(100, 255, 218, 0.1)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "15px",
                      fontSize: "1.2rem",
                      color: "#64ffda"
                    }}
                  >
                    📧
                  </div>
                  <div>
                    <h6
                      style={{ fontWeight: "600", margin: 0, color: "#e6f1ff" }}
                    >
                      Email
                    </h6>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      style={{
                        color: "#64ffda",
                        textDecoration: "none",
                        opacity: 0.9
                      }}
                      onMouseEnter={(e) => (e.target.style.opacity = "1")}
                      onMouseLeave={(e) => (e.target.style.opacity = "0.9")}
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Section (FIXED) */}
                <div
                  className="d-flex align-items-center mb-4 p-3"
                  style={{
                    background: "rgba(100, 255, 218, 0.05)",
                    borderRadius: "10px",
                    border: "1px solid rgba(100, 255, 218, 0.1)",
                    transition: "all 0.3s ease"
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      background: "rgba(100, 255, 218, 0.1)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "15px",
                      fontSize: "1.2rem",
                      color: "#64ffda"
                    }}
                  >
                    💬
                  </div>
                  <div>
                    <h6
                      style={{ fontWeight: "600", margin: 0, color: "#e6f1ff" }}
                    >
                      WhatsApp
                    </h6>
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp.replace(
                        /\D/g,
                        ""
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#64ffda",
                        textDecoration: "none",
                        opacity: 0.9
                      }}
                      onMouseEnter={(e) => (e.target.style.opacity = "1")}
                      onMouseLeave={(e) => (e.target.style.opacity = "0.9")}
                    >
                      {contactInfo.whatsapp}
                    </a>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
