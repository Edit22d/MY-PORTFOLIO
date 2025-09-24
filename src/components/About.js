import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import AboutPic from '../Images/about.png'
function About() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 0",
        background: "linear-gradient(135deg, #0a192f 0%, #172a45 100%)",
        color: "#e6f1ff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `radial-gradient(circle at 75% 75%, rgba(100, 255, 218, 0.05) 0%, transparent 50%)`,
        pointerEvents: "none"
      }}></div>
      
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="mb-5 mb-lg-0 text-center">
            <div style={{
              position: "relative",
              display: "inline-block"
            }}>
              <Image
                src={AboutPic}
                full
                
                style={{
                  width: "320px",
                  borderRadius:"50%",
                  height: "600px",
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 2,
                  paddingTop:"1rem"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 25px 50px rgba(100, 255, 218, 0.2)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3)";
                }}
              />
              
            
              <div style={{
                position: "absolute",
                top: "-15px",
                left: "-15px",
                width: "350px",
                height: "350px",
                border: "2px solid rgba(100, 255, 218)",
                zIndex: 1,
                animation: "rotate 20s linear infinite"
              }}></div>
            </div>
          </Col>

          <Col lg={7}>
            <h6 style={{
              color: "#64ffda",
              fontSize: "1.1rem",
              fontWeight: "400",
              letterSpacing: "0.1em",
              marginBottom: "1rem",
              textTransform: "uppercase"
            }}>
              About Me
            </h6>

            <h2 style={{
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: "700",
              marginBottom: "1.5rem",
              background: "linear-gradient(45deg, #e6f1ff 0%, #64ffda 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Passionate Computer Scientist
            </h2>

            <p style={{
              fontSize: "1.2rem",
              
              lineHeight: "1.8",
              color: "#ccd6f6",
              marginBottom: "2rem",
              fontWeight: "300"
            }}>
              I'm <strong style={{ color: "#64ffda" }}>Edith</strong>, a Computer Science student 
              passionate about full-stack development and innovative problem-solving. 
              I transform ideas into impactful digital solutions.
            </p>

            <p style={{
              fontSize: "1.1rem",
              lineHeight: "1.7",
              color: "#8892b0",
              marginBottom: "2.5rem"
            }}>
              Through hands-on projects and competitive environments, I've honed my 
              technical expertise and collaborative skills.
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
              marginBottom: "2.5rem"
            }}>
              <div style={{
                padding: "1.5rem",
                backgroundColor: "rgba(100, 255, 218, 0.05)",
                borderRadius: "10px",
                border: "1px solid rgba(100, 255, 218, 0.1)",
                textAlign: "center",
                transition: "all 0.3s ease"
              }} onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "#64ffda";
              }} onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.1)";
              }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🏆</div>
                <h5 style={{ color: "#64ffda", marginBottom: "0.5rem" }}>Hackathon Winner</h5>
                <p style={{ color: "#8892b0", margin: 0, fontSize: "0.9rem" }}>$100 prize winner</p>
              </div>

              <div style={{
                padding: "1.5rem",
                backgroundColor: "rgba(100, 255, 218, 0.05)",
                borderRadius: "10px",
                border: "1px solid rgba(100, 255, 218, 0.1)",
                textAlign: "center",
                transition: "all 0.3s ease"
              }} onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = "#64ffda";
              }} onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.1)";
              }}>
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>💻</div>
                <h5 style={{ color: "#64ffda", marginBottom: "0.5rem" }}>Professional Developer</h5>
                <p style={{ color: "#8892b0", margin: 0, fontSize: "0.9rem" }}>Urban-Tech website</p>
              </div>
            </div>

            <p style={{
              fontSize: "1.1rem",
              color: "#ccd6f6",
              fontStyle: "italic",
              borderLeft: "3px solid #64ffda",
              paddingLeft: "1rem",
              margin: 0
            }}>
              My mission is to continuously evolve as a technology innovator, 
              contributing to meaningful projects that push the boundaries of 
              what's possible in the digital landscape.
            </p>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}

export default About;