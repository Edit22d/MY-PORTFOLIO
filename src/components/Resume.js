import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function Resume() {
  return (
    <section
      id="resume"
      style={{
        padding: "100px 0",
        background: "linear-gradient(135deg, #0a192f 0%, #172a45 100%)",
        minHeight: "100vh",
        color: "#e6f1ff",
        position: "relative"
      }}
    >
     
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
                Qualifications
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
                My Resume
              </h2>
              <p style={{
                color: "#8892b0",
                fontSize: "1.1rem",
                maxWidth: "600px",
                margin: "0 auto"
              }}>
                Here is a summary of my education, skills, and achievements as a growing Computer Scientist
              </p>
            </div>
          </Col>
        </Row>

        <Row className="g-4">
         
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
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(100, 255, 218, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.1)";
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
                    🎓
                  </div>
                  <h4 style={{ 
                    fontWeight: "600", 
                    color: "#e6f1ff", 
                    margin: 0,
                    fontSize: "1.3rem"
                  }}>
                    Education
                  </h4>
                </div>
                <ul style={{ 
                  marginTop: "15px", 
                  paddingLeft: "20px", 
                  lineHeight: "1.8", 
                  color: "#8892b0",
                  listStyle: "none"
                }}>
                  <li style={{ 
                    marginBottom: "20px",
                    position: "relative",
                    paddingLeft: "10px"
                  }}>
                    <div style={{
                      position: "absolute",
                      left: "-20px",
                      top: "8px",
                      width: "8px",
                      height: "8px",
                      backgroundColor: "#64ffda",
                      borderRadius: "50%"
                    }}></div>
                    <strong style={{ color: "#e6f1ff", display: "block" }}>
                      Diploma in Computer Science
                    </strong>
                    <span style={{ color: "#64ffda", display: "block" }}>
                      Ongoing (Completed Year 1)
                    </span>
                    <small style={{ color: "#8892b0" }}>
                      Women In Technology, Uganda • 2024
                    </small>
                  </li>
                </ul>
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
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.borderColor = "#64ffda";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(100, 255, 218, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.1)";
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
                    📜
                  </div>
                  <h4 style={{ 
                    fontWeight: "600", 
                    color: "#e6f1ff", 
                    margin: 0,
                    fontSize: "1.3rem"
                  }}>
                    Certifications
                  </h4>
                </div>
                <ul style={{ 
                  marginTop: "15px", 
                  paddingLeft: "0", 
                  lineHeight: "1.8", 
                  color: "#8892b0",
                  listStyle: "none"
                }}>
                  <li style={{ marginBottom: "12px", paddingLeft: "10px" }}>
                    <span style={{ color: "#64ffda", marginRight: "8px" }}>•</span>
                    Career Course – Hi-Innovator Academic
                  </li>
                  <li style={{ marginBottom: "12px", paddingLeft: "10px" }}>
                    <span style={{ color: "#64ffda", marginRight: "8px" }}>•</span>
                    Hackathon Winner – $100 Prize
                  </li>
                  <li style={{ marginBottom: "12px", paddingLeft: "10px" }}>
                    <span style={{ color: "#64ffda", marginRight: "8px" }}>•</span>
                    Wezesha Up-Shift Level One – $100 Team Prize
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
         
          <Col lg={12}>
            <Card 
              style={{ 
                border: "1px solid rgba(100, 255, 218, 0.1)",
                borderRadius: "15px",
                backgroundColor: "rgba(10, 25, 47, 0.5)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.borderColor = "#64ffda";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(100, 255, 218, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.1)";
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
                    💻
                  </div>
                  <h4 style={{ 
                    fontWeight: "600", 
                    color: "#e6f1ff", 
                    margin: 0,
                    fontSize: "1.3rem"
                  }}>
                    Experience
                  </h4>
                </div>
                <ul style={{ 
                  marginTop: "15px", 
                  paddingLeft: "0", 
                  lineHeight: "1.8", 
                  color: "#8892b0",
                  listStyle: "none"
                }}>
                  <li style={{ marginBottom: "25px", paddingLeft: "10px" }}>
                    <strong style={{ color: "#e6f1ff", display: "block" }}>
                      Urban-Tech Engineering Consults Website
                    </strong>
                    <span style={{ display: "block" }}>
                      Designed and developed a fully responsive, user-friendly company website now in active use.
                    </span>
                  </li>
                  <li style={{ paddingLeft: "10px" }}>
                    <strong style={{ color: "#e6f1ff", display: "block" }}>
                      Hackathons & Group Projects
                    </strong>
                    <span style={{ display: "block" }}>
                      Hands-on experience collaborating in teams, building solutions, and solving real-world problems.
                    </span>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col lg={12}>
            <Card 
              style={{ 
                border: "1px solid rgba(100, 255, 218, 0.1)",
                borderRadius: "15px",
                backgroundColor: "rgba(10, 25, 47, 0.5)",
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                overflow: "hidden"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.borderColor = "#64ffda";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(100, 255, 218, 0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.1)";
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
                    ⚡
                  </div>
                  <h4 style={{ 
                    fontWeight: "600", 
                    color: "#e6f1ff", 
                    margin: 0,
                    fontSize: "1.3rem"
                  }}>
                    Technical Skills
                  </h4>
                </div>
              
              </Card.Body>
            </Card>
          </Col>
        </Row>

        
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
  <Button
    href="/MYCV.docx"  
    download
    style={{
      backgroundColor: "transparent",
      border: "1px solid #64ffda",
      color: "#64ffda",
      fontWeight: "500",
      padding: "1rem 2.5rem",
      borderRadius: "4px",
      transition: "all 0.3s ease",
      textTransform: "uppercase",
      letterSpacing: "0.05em",
      fontSize: "1rem"
    }}
    onMouseEnter={(e) => {
      e.target.style.backgroundColor = "#64ffda";
      e.target.style.color = "#0a192f";
    }}
    onMouseLeave={(e) => {
      e.target.style.backgroundColor = "transparent";
      e.target.style.color = "#64ffda";
    }}
  >
    📂 Download Resume
  </Button>
</div>

      </Container>
    </section>
  );
}

export default Resume;
