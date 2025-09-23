import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Project() {
  const projects = [
    {
      title: "Hackathon Innovation Challenge",
      description: "Led team to develop award-winning solution under pressure, securing $100 prize in competitive tech competition.",
      image: "/images/hackathon.jpg",
      link: "#",
      category: "Achievement",
      technologies: ["Team Collaboration", "Problem Solving", "Innovation"]
    },
    {
      title: "Hi-Innovator Career Development",
      description: "Completed intensive career course focused on professional growth and technical skill enhancement.",
      image: "/images/hi-innovator.jpg",
      link: "#",
      category: "Certification",
      technologies: ["Career Development", "Professional Growth", "Training"]
    },
    {
      title: "Urban-Tech Engineering Website",
      description: "Designed and deployed fully responsive professional website for engineering consultancy firm.",
      image: "/images/urban-tech-demo.png",
      link: "https://your-demo-link.com",
      category: "Web Development",
      technologies: ["React", "Bootstrap", "Responsive Design"]
    },
    {
      title: "Wezesha Up-Shift Competition",
      description: "Achieved Level One victory among 89 competing teams, demonstrating exceptional teamwork and strategy.",
      image: "/images/wezesha.jpg",
      link: "#",
      category: "Achievement",
      technologies: ["Team Leadership", "Strategic Planning", "Competition"]
    }
  ];

  return (
    <section
      id="projects"
      style={{
        padding: "100px 0",
        background: "linear-gradient(135deg, #0a192f 0%, #172a45 100%)",
        color: "#e6f1ff",
        position: "relative"
      }}
    >
      {/* Background Pattern */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(100, 255, 218, 0.03) 0%, transparent 50%)`,
        pointerEvents: "none"
      }}></div>

      <Container>
        <Row className="mb-5">
          <Col lg={12}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h6 style={{
                color: "#64ffda",
                fontSize: "1.1rem",
                fontWeight: "400",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1rem"
              }}>
                Portfolio
              </h6>
              <h2 style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: "700",
                marginBottom: "1rem",
                background: "linear-gradient(45deg, #e6f1ff 0%, #64ffda 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Projects & Achievements
              </h2>
              <p style={{
                color: "#8892b0",
                fontSize: "1.1rem",
                maxWidth: "600px",
                margin: "0 auto"
              }}>
                Showcasing my journey through innovative projects and notable accomplishments
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          {projects.map((project, index) => (
            <Col lg={6} key={index} className="mb-4">
              <Card style={{
                border: "1px solid rgba(100, 255, 218, 0.1)",
                borderRadius: "15px",
                backgroundColor: "rgba(10, 25, 47, 0.5)",
                backdropFilter: "blur(10px)",
                height: "100%",
                transition: "all 0.3s ease",
                overflow: "hidden"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.borderColor = "#64ffda";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(100, 255, 218, 0.1)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.1)";
                e.currentTarget.style.boxShadow = "none";
              }}>
                <div style={{ position: "relative" }}>
                  <Card.Img 
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    style={{
                      height: "220px",
                      objectFit: "cover",
                      filter: "brightness(0.9)"
                    }}
                  />
                  <div style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    backgroundColor: "rgba(100, 255, 218, 0.9)",
                    color: "#0a192f",
                    padding: "0.3rem 0.8rem",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    fontWeight: "600"
                  }}>
                    {project.category}
                  </div>
                </div>
                
                <Card.Body style={{ padding: "2rem" }}>
                  <Card.Title style={{
                    color: "#e6f1ff",
                    fontSize: "1.4rem",
                    fontWeight: "600",
                    marginBottom: "1rem"
                  }}>
                    {project.title}
                  </Card.Title>
                  
                  <Card.Text style={{
                    color: "#8892b0",
                    lineHeight: "1.6",
                    marginBottom: "1.5rem"
                  }}>
                    {project.description}
                  </Card.Text>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <div style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem"
                    }}>
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} style={{
                          backgroundColor: "rgba(100, 255, 218, 0.1)",
                          color: "#64ffda",
                          padding: "0.3rem 0.8rem",
                          borderRadius: "15px",
                          fontSize: "0.8rem",
                          border: "1px solid rgba(100, 255, 218, 0.2)"
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button
                    style={{
                      backgroundColor: "transparent",
                      border: "1px solid #64ffda",
                      color: "#64ffda",
                      fontWeight: "500",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "4px",
                      transition: "all 0.3s ease",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      fontSize: "0.9rem",
                      width: "100%"
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#64ffda";
                      e.target.style.color = "#0a192f";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#64ffda";
                    }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Call to Action */}
        <Row className="mt-5">
          <Col lg={12} className="text-center">
            <div style={{
              backgroundColor: "rgba(100, 255, 218, 0.05)",
              border: "1px solid rgba(100, 255, 218, 0.1)",
              borderRadius: "15px",
              padding: "3rem",
              marginTop: "2rem"
            }}>
              <h4 style={{
                color: "#64ffda",
                marginBottom: "1rem"
              }}>
                Interested in Collaborating?
              </h4>
              <p style={{
                color: "#8892b0",
                marginBottom: "2rem",
                fontSize: "1.1rem"
              }}>
                I'm always open to discussing new opportunities and innovative projects.
              </p>
              <Button
                href="#contact"
                style={{
                  backgroundColor: "#64ffda",
                  border: "1px solid #64ffda",
                  color: "#0a192f",
                  fontWeight: "600",
                  padding: "1rem 2rem",
                  borderRadius: "4px",
                  transition: "all 0.3s ease",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.color = "#64ffda";
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = "#64ffda";
                  e.target.style.color = "#0a192f";
                }}
              >
                Get In Touch
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Project;