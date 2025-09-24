import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Homepic from "../Images/home1.png"

function Home() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #0a192f 0%, #172a45 50%, #0a192f 100%)",
        color: "#e6f1ff",
        padding: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(100, 255, 218, 0.1) 0%, transparent 50%)`,
          pointerEvents: "none",
        }}
      ></div>

      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start">
            <div style={{ position: "relative", zIndex: 2 }}>
              <h6
                style={{
                  color: "#64ffda",
                  fontSize: "1.1rem",
                  fontWeight: "400",
                  letterSpacing: "0.1em",
                  marginBottom: "1rem",
                }}
              >
                HI, MY NAME IS
              </h6>

              <h1
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: "700",
                  marginBottom: "0.5rem",
                  background: "linear-gradient(45deg, #e6f1ff 0%, #64ffda 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Edith.
              </h1>

              <h2
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  fontWeight: "600",
                  color: "#ccd6f6",
                  marginBottom: "1.5rem",
                }}
              >
                Computer Scientist & Full Stack Developer
              </h2>

              <p
                style={{
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#8892b0",
                  maxWidth: "540px",
                  marginBottom: "2.5rem",
                }}
              >
                I'm a passionate Computer Science student specializing in
                full-stack development, artificial intelligence, and innovative
                problem-solving. Currently advancing my expertise in cutting-edge
                technologies to build the future of digital solutions.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  justifyContent: "flex-start",
                }}
              >
                <Button
                  href="#projects"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid #64ffda",
                    color: "#64ffda",
                    fontWeight: "500",
                    padding: "12px 28px",
                    borderRadius: "4px",
                    transition: "all 0.3s ease",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontSize: "0.9rem",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "rgba(100, 255, 218, 0.1)";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  View My Work
                </Button>

                <Button
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "#64ffda",
                    border: "1px solid #64ffda",
                    color: "#0a192f",
                    fontWeight: "500",
                    padding: "12px 28px",
                    borderRadius: "4px",
                    transition: "all 0.3s ease",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontSize: "0.9rem",
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "#64ffda";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#64ffda";
                    e.target.style.color = "#0a192f";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Download CV
                </Button>
              </div>
            </div>
          </Col>

          <Col lg={6} className="text-center mt-5 mt-lg-0">
            <div style={{ position: "relative", display: "inline-block" }}>
              <div
                style={{
                  width: "320px",
                  height: "320px",
                  borderRadius: "50%",
                  background: "linear-gradient(45deg, #64ffda 0%, #0a192f 100%)",
                  margin: "0 auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 30px rgba(100, 255, 218, 0.2)",
                  transition: "all 0.3s ease",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 40px rgba(100, 255, 218, 0.3)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(100, 255, 218, 0.2)";
                }}
              >
                <img
                  src={Homepic}
                  alt="Edith - Computer Scientist"
                  style={{
                    width: "400px",
                    height: "450px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #0a192f",
                  }}
                />
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "30px",
                  width: "60px",
                  height: "60px",
                  border: "2px solid #64ffda",
                  borderRadius: "50%",
                  animation: "float 6s ease-in-out infinite",
                }}
              ></div>

              <div
                style={{
                  position: "absolute",
                  bottom: "40px",
                  left: "20px",
                  width: "40px",
                  height: "40px",
                  border: "2px solid #64ffda",
                  borderRadius: "50%",
                  animation: "float 4s ease-in-out infinite 1s",
                }}
              ></div>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
      `}</style>
    </section>
  );
}

export default Home;
