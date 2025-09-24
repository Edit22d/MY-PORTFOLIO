import React from "react";
import { Container, Row, Col, ProgressBar, Card } from "react-bootstrap";

function Skill() {
  const technicalSkills = [
    { name: "HTML & CSS", level: 85, category: "Frontend" },
    { name: "JavaScript", level: 75, category: "Frontend" },
    { name: "React.js", level: 70, category: "Frontend" },
    { name: "Bootstrap", level: 80, category: "Frontend" },
    { name: "Python", level: 65, category: "Backend" },
    { name: "Flask", level: 60, category: "Backend" },
    { name: "Problem Solving", level: 75, category: "Technical" },
    { name: "Algorithms", level: 70, category: "Technical" },
  ];

  const softSkills = [
    { name: "Communication", level: 90 },
    { name: "Teamwork", level: 85 },
    { name: "Leadership", level: 75 },
    { name: "Project Management", level: 80 },
  ];

  const SkillProgressBar = ({ level, skillName }) => (
    <div style={{ position: "relative", marginBottom: "2rem" }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "0.5rem"
      }}>
        <span style={{ 
          color: "#ccd6f6", 
          fontSize: "0.9rem",
          fontWeight: "500"
        }}>{skillName}</span>
        <span style={{ 
          color: "#64ffda", 
          fontSize: "0.9rem",
          fontWeight: "600"
        }}>{level}%</span>
      </div>
      <div style={{
        width: "100%",
        height: "6px",
        backgroundColor: "rgba(100, 255, 218, 0.1)",
        borderRadius: "3px",
        overflow: "hidden"
      }}>
        <div style={{
          width: `${level}%`,
          height: "100%",
          background: "linear-gradient(90deg, #64ffda 0%, #0a192f 100%)",
          borderRadius: "3px",
          transition: "width 1.5s ease-in-out",
          position: "relative"
        }}>
          <div style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "2px",
            height: "100%",
            backgroundColor: "#64ffda",
            boxShadow: "0 0 10px #64ffda"
          }}></div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      style={{
        padding: "100px 0",
        background: "linear-gradient(135deg, #0a192f 0%, #172a45 100%)",
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
        backgroundImage: `radial-gradient(circle at 75% 25%, rgba(100, 255, 218, 0.03) 0%, transparent 50%)`,
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
                Technical Expertise
              </h6>
              <h2 style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: "700",
                background: "linear-gradient(45deg, #e6f1ff 0%, #64ffda 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Skills & Proficiency
              </h2>
            </div>
          </Col>
        </Row>

        <Row>
        
          <Col lg={8} className="mb-5">
            <Card style={{
              border: "1px solid rgba(100, 255, 218, 0.1)",
              borderRadius: "15px",
              backgroundColor: "rgba(10, 25, 47, 0.5)",
              backdropFilter: "blur(10px)",
              padding: "2.5rem",
              height: "100%",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "#64ffda";
            
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.1)";
            }}>
              <h3 style={{
                color: "#64ffda",
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "2rem",
                textAlign: "center"
              }}>
                Technical Skills
              </h3>
              
              <Row>
                <Col md={6}>
                  {technicalSkills.slice(0, 4).map((skill, index) => (
                    <SkillProgressBar 
                      key={index} 
                      level={skill.level} 
                      skillName={skill.name}
                    />
                  ))}
                </Col>
                <Col md={6}>
                  {technicalSkills.slice(4).map((skill, index) => (
                    <SkillProgressBar 
                      key={index} 
                      level={skill.level} 
                      skillName={skill.name}
                    />
                  ))}
                </Col>
              </Row>
            </Card>
          </Col>

         
          <Col lg={4}>
            <Card style={{
              border: "1px solid rgba(100, 255, 218, 0.1)",
              borderRadius: "15px",
              backgroundColor: "rgba(100, 255, 218, 0.05)",
              backdropFilter: "blur(10px)",
              padding: "2.5rem",
              height: "100%",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "#64ffda";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "rgba(100, 255, 218, 0.1)";
            }}>
              <h3 style={{
                color: "#64ffda",
                fontSize: "1.5rem",
                fontWeight: "600",
                marginBottom: "2rem",
                textAlign: "center"
              }}>
                Soft Skills
              </h3>
              
              {softSkills.map((skill, index) => (
                <div key={index} style={{ marginBottom: "2rem" }}>
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "0.5rem"
                  }}>
                    <div style={{
                      width: "12px",
                      height: "10px",
                      backgroundColor: "#64ffda",
                      borderRadius: "50%",
                      marginRight: "1rem"
                    }}></div>
                    <span style={{ 
                      color: "#ccd6f6", 
                      fontSize: "0.9rem",
                      fontWeight: "500",
                      flex: 1
                    }}>{skill.name}</span>
                    <span style={{ 
                      color: "#64ffda", 
                      fontSize: "0.9rem",
                      fontWeight: "600"
                    }}>{skill.level}%</span>
                  </div>
                  <div style={{
                    width: "100%",
                    height: "4px",
                    backgroundColor: "rgba(100, 255, 218, 0.2)",
                    borderRadius: "2px"
                  }}>
                    <div style={{
                      width: `${skill.level}%`,
                      height: "100%",
                      backgroundColor: "#64ffda",
                      borderRadius: "2px",
                      transition: "width 1.5s ease-in-out"
                    }}></div>
                  </div>
                </div>
              ))}
            </Card>
          </Col>
        </Row>

    
        <Row className="mt-5">
          <Col lg={12}>
            <Card style={{
              border: "1px solid rgba(100, 255, 218, 0.1)",
              borderRadius: "15px",
              backgroundColor: "rgba(100, 255, 218, 0.02)",
              padding: "2rem",
              textAlign: "center"
            }}>
              <p style={{
                color: "#8892b0",
                fontSize: "1.1rem",
                margin: 0,
                fontStyle: "italic"
              }}>
                "Continuously expanding my skill set through hands-on projects and 
                dedicated learning in emerging technologies."
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skill;