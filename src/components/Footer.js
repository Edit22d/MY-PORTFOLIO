import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaWhatsapp, FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

function Footer() {
  const socialLinks = {
    whatsapp: "https://wa.me/yourphonenumber",
    linkedin: "https://linkedin.com/in/your-username",
    twitter: "https://twitter.com/your-username",
    instagram: "https://instagram.com/your-username",
    github: "https://github.com/your-username"
  };

  const pageLinks = [
    { name: "Home", path: "#home", icon: <FaHome /> },
    { name: "About", path: "#about", icon: <FaUser /> },
    { name: "Projects", path: "#projects", icon: <FaProjectDiagram /> },
    { name: "Contact", path: "#contact", icon: <FaEnvelope /> }
  ];

  const isSocialActive = {
    whatsapp: true,
    linkedin: true,
    twitter: true,
    instagram: true,
    github: true
  };

  return (
    <footer style={{
      background:"black",
      color: "#e6f1ff",
      padding: "60px 0 30px",
      position: "relative",
      overflow: "hidden",
      borderTop: "1px solid rgba(100, 255, 218, 0.1)"
    }}>
     
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 75% 75%, rgba(100, 255, 218, 0.05) 0%, transparent 50%)`,
        pointerEvents: "none"
      }}></div>
      
      <Container style={{ position: "relative", zIndex: 2 }}>
        <Row>
         
          <Col lg={4} md={6} className="mb-4">
            <h5 style={{
              color: "#64ffda",
              fontWeight: "600",
              marginBottom: "1.5rem",
              fontSize: "1.2rem"
            }}>
              Quick Navigation
            </h5>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {pageLinks.map((link, index) => (
                <li key={index} style={{ marginBottom: "0.8rem" }}>
                  <a 
                    href={link.path} 
                    style={{
                      color: "#ccd6f6",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      transition: "all 0.3s ease",
                      fontSize: "0.95rem"
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#64ffda";
                      e.target.style.transform = "translateX(5px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "#ccd6f6";
                      e.target.style.transform = "translateX(0)";
                    }}
                  >
                    <span style={{ marginRight: "10px", color: "#64ffda" }}>{link.icon}</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

         
          <Col lg={4} md={6} className="mb-4">
            <h5 style={{
              color: "#64ffda",
              fontWeight: "600",
              marginBottom: "1.5rem",
              fontSize: "1.2rem"
            }}>
              Get In Touch
            </h5>
            <p style={{
              color: "#8892b0",
              lineHeight: "1.6",
              marginBottom: "1.5rem",
              fontSize: "0.95rem"
            }}>
              Ready to bring your ideas to life? Let's connect and discuss how we can work together to create something amazing.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <a 
                href="mailto:your.email@example.com" 
                style={{
                  color: "#ccd6f6",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  fontSize: "0.95rem"
                }}
                onMouseEnter={(e) => e.target.style.color = "#64ffda"}
                onMouseLeave={(e) => e.target.style.color = "#ccd6f6"}
              >
                ✉️ your.email@example.com
              </a>
              <a 
                href="tel:+1234567890" 
                style={{
                  color: "#ccd6f6",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                  fontSize: "0.95rem"
                }}
                onMouseEnter={(e) => e.target.style.color = "#64ffda"}
                onMouseLeave={(e) => e.target.style.color = "#ccd6f6"}
              >
                📞 +123 456 7890
              </a>
            </div>
          </Col>

        
          <Col lg={4} md={12}>
            <h5 style={{
              color: "#64ffda",
              fontWeight: "600",
              marginBottom: "1.5rem",
              fontSize: "1.2rem"
            }}>
              Follow My Journey
            </h5>
            <p style={{
              color: "#8892b0",
              lineHeight: "1.6",
              marginBottom: "1.5rem",
              fontSize: "0.95rem"
            }}>
              Stay updated with my latest projects, insights, and technological explorations.
            </p>
            <div style={{ 
              display: "flex", 
              gap: "1rem",
              flexWrap: "wrap"
            }}>
              {isSocialActive.github && (
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ccd6f6",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    border: "1px solid #64ffda",
                    borderRadius: "50%"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#0a192f";
                    e.target.style.backgroundColor = "#64ffda";
                    e.target.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ccd6f6";
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.transform = "translateY(0)";
                  }}
                  title="GitHub"
                >
                  <FaGithub size={18} />
                </a>
              )}
              {isSocialActive.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ccd6f6",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    border: "1px solid #64ffda",
                    borderRadius: "50%"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#0a192f";
                    e.target.style.backgroundColor = "#64ffda";
                    e.target.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ccd6f6";
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.transform = "translateY(0)";
                  }}
                  title="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
              )}
              {isSocialActive.twitter && (
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ccd6f6",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    border: "1px solid #64ffda",
                    borderRadius: "50%"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#0a192f";
                    e.target.style.backgroundColor = "#64ffda";
                    e.target.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ccd6f6";
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.transform = "translateY(0)";
                  }}
                  title="Twitter"
                >
                  <FaTwitter size={18} />
                </a>
              )}
              {isSocialActive.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ccd6f6",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    border: "1px solid #64ffda",
                    borderRadius: "50%"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#0a192f";
                    e.target.style.backgroundColor = "#64ffda";
                    e.target.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ccd6f6";
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.transform = "translateY(0)";
                  }}
                  title="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
              )}
              {isSocialActive.whatsapp && (
                <a
                  href={socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ccd6f6",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    border: "1px solid #64ffda",
                    borderRadius: "50%"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#0a192f";
                    e.target.style.backgroundColor = "#64ffda";
                    e.target.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ccd6f6";
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.transform = "translateY(0)";
                  }}
                  title="WhatsApp"
                >
                  <FaWhatsapp size={18} />
                </a>
              )}
            </div>
          </Col>
        </Row>

       
        <Row style={{
          marginTop: "3rem",
          paddingTop: "2rem",
          borderTop: "1px solid rgba(100, 255, 218, 0.2)"
        }}>
          <Col md={6} className="text-center text-md-start">
            <h6 style={{
              color: "#64ffda",
              fontWeight: "600",
              marginBottom: "0.5rem"
            }}>
              © {new Date().getFullYear()} Edith
            </h6>
            <p style={{
              color: "#8892b0",
              margin: 0,
              fontSize: "0.9rem"
            }}>
              Computer Scientist & Full Stack Developer
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <p style={{
              color: "#8892b0",
              margin: 0,
              fontSize: "0.9rem"
            }}>
              Crafted with passion using React & Bootstrap
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;