import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Projectpic1 from "../Images/project1.png";
import Projectpic from "../Images/project.png";
import Projectpic2 from "../Images/project2.png";

function Blogs() {
  const blogs = [
    {
      title: "My First Hackathon Experience",
      date: "July 2025",
      description:
        "I participated in my very first hackathon and it was an exciting journey! Our team built a solution under pressure and ended up winning $100.",
      image: Projectpic1, // corrected
      link: "#",
    },
    {
      title: "Lessons from Hi-Innovator Academic",
      date: "June 2025",
      description:
        "I completed a career development course with Hi-Innovator Academic. Here are my key takeaways that shaped my growth as a computer scientist.",
      image: Projectpic, // corrected
      link: "#",
    },
    {
      title: "Building the Urban-Tech Website",
      date: "May 2025",
      description:
        "I designed and developed a fully responsive website for Urban-Tech Engineering Consults. This blog shares the tools and approach I used.",
      image: Projectpic2, // corrected
      link: "#",
    },
  ];

  const achievements = [
    { number: "$100", label: "Hackathon Prize", icon: "🏆" },
    { number: "89", label: "Teams Outperformed", icon: "🤝" },
    { number: "100%", label: "Project Success", icon: "💻" },
    { number: "L1", label: "Wezesha Up-Shift", icon: "📈" },
  ];

  return (
    <section
      id="blogs"
      style={{
        padding: "100px 0",
        background: "linear-gradient(135deg, #0a192f 0%, #172a45 100%)",
        color: "#e6f1ff",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(100, 255, 218, 0.03) 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      ></div>

      <Container>
        {/* Achievements Section */}
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
                  marginBottom: "1rem",
                }}
              >
                Achievements
              </h6>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: "700",
                  marginBottom: "3rem",
                  background: "linear-gradient(45deg, #e6f1ff 0%, #64ffda 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Key Milestones
              </h2>
            </div>

            <Row>
              {achievements.map((achievement, index) => (
                <Col lg={3} md={6} key={index} className="mb-4">
                  <div
                    style={{
                      textAlign: "center",
                      padding: "2rem 1rem",
                      backgroundColor: "rgba(100, 255, 218, 0.05)",
                      borderRadius: "15px",
                      border: "1px solid rgba(100, 255, 218, 0.1)",
                      transition: "all 0.3s ease",
                      height: "100%",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-10px)";
                      e.currentTarget.style.borderColor = "#64ffda";
                      e.currentTarget.style.boxShadow = "0 15px 30px rgba(100, 255, 218, 0.1)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.1)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{achievement.icon}</div>
                    <h3 style={{ color: "#64ffda", fontSize: "2.5rem", fontWeight: "700", marginBottom: "0.5rem" }}>
                      {achievement.number}
                    </h3>
                    <p style={{ color: "#ccd6f6", fontSize: "1.1rem", margin: 0, fontWeight: "500" }}>
                      {achievement.label}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Blogs / Projects */}
        <Row>
          <Col lg={12}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <h6
                style={{
                  color: "#64ffda",
                  fontSize: "1.1rem",
                  fontWeight: "400",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                Latest Projects
              </h6>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.8rem)",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  background: "linear-gradient(45deg, #e6f1ff 0%, #64ffda 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Featured Works
              </h2>
              <p
                style={{
                  color: "#8892b0",
                  fontSize: "1.1rem",
                  maxWidth: "600px",
                  margin: "0 auto",
                }}
              >
                Insights from my journey in technology and innovation
              </p>
            </div>
          </Col>
        </Row>

        <Row>
          {blogs.map((blog, index) => (
            <Col lg={4} md={6} key={index} className="mb-4">
              <Card
                style={{
                  border: "1px solid rgba(100, 255, 218, 0.1)",
                  borderRadius: "15px",
                  backgroundColor: "rgba(10, 25, 47, 0.5)",
                  backdropFilter: "blur(10px)",
                  height: "100%",
                  transition: "all 0.3s ease",
                  overflow: "hidden",
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
                }}
              >
                <Card.Img
                  variant="top"
                  src={blog.image}
                  alt={blog.title}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderBottom: "1px solid rgba(100, 255, 218, 0.1)",
                  }}
                />
                <Card.Body style={{ padding: "2rem" }}>
                  <Card.Title style={{ color: "#e6f1ff", fontSize: "1.3rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                    {blog.title}
                  </Card.Title>
                  <Card.Subtitle style={{ color: "#64ffda", fontSize: "0.9rem", fontWeight: "400", marginBottom: "1rem" }}>
                    {blog.date}
                  </Card.Subtitle>
                  <Card.Text style={{ color: "#8892b0", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                    {blog.description}
                  </Card.Text>
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
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = "#64ffda";
                      e.target.style.color = "#0a192f";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.color = "#64ffda";
                    }}
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Blogs;
