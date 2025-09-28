import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

function Read() {
  const { id } = useParams(); 
  const index = parseInt(id, 10);

  const blogs = [
    {
      title: "My First Hackathon Experience",
      date: "July 2025",
      content: `
        I participated in my very first hackathon and it was an exciting journey!
        Our team had only 48 hours to build something useful. 
        We brainstormed late into the night, argued a little, 
        but pushed through and built a solution we were proud of.
        
        The highlight was pitching to judges – and surprisingly, 
        our project won $100. This was not just about money, 
        but about believing in myself as a developer.`,
      link: "https://www.linkedin.com/posts/nabwire-edith-699b72335_africastalking-foodsecurity-activity-7313495777819934720-PoTe?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFRbHFUBeWVgMlHe_YnFmdrfeHduwqSslro" 
    },
    {
      title: "Lessons from Hi-Innovator Academic",
      date: "June 2025",
      content: `
        I completed a career development course with Hi-Innovator Academic. 
        The program gave me insights on business models, pitching ideas, 
        and aligning technology with real-world needs.

        One of the key lessons was the importance of teamwork 
        and communication in making projects successful. 
        I walked away with more confidence as both a developer and innovator.`,
      link: "https://www.linkedin.com/posts/nabwire-edith-699b72335_hi-activity-7348366272499179520-4HwE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFRbHFUBeWVgMlHe_YnFmdrfeHduwqSslro" 
    },
    {
      title: "Building the Urban-Tech Website",
      date: "May 2025",
      content: `
        Designing and developing the Urban-Tech Engineering Consults website 
        was both challenging and rewarding. I made the site fully responsive 
        using React and Bootstrap, ensuring it works across devices.

        I also implemented smooth animations, a dynamic project section, 
        and an engaging homepage. The feedback was positive, 
        and it inspired me to keep improving my frontend skills.`,
      link: "https://urbantechconsults.com" 
    }
  ];

  const blog = blogs[index];

  if (!blog) {
    return (
      <Container style={{ padding: "100px 0", textAlign: "center", color: "#e6f1ff" }}>
        <h2>Blog Not Found</h2>
        <Button 
          variant="outline-info" 
          style={{ marginTop: "20px" }}
          onClick={() => window.open("https://www.linkedin.com/in/nabwire-edith-", "_blank")}
        >
          Back
        </Button>
      </Container>
    );
  }

  return (
    <section
      style={{
        padding: "100px 0",
        background: "linear-gradient(135deg, #0a192f 0%, #172a45 100%)",
        color: "#e6f1ff",
        minHeight: "100vh"
      }}
    >
      <Container>
        <Row>
          <Col lg={12}>
            <h1 style={{ color: "#64ffda", marginBottom: "1rem" }}>{blog.title}</h1>
            <p style={{ color: "#8892b0", marginBottom: "2rem" }}>{blog.date}</p>
            <p style={{ whiteSpace: "pre-line", lineHeight: "1.8", color: "#ccd6f6" }}>
              {blog.content}
            </p>
            <Button
              style={{
                backgroundColor: "transparent",
                border: "1px solid #64ffda",
                color: "#64ffda",
                marginTop: "2rem"
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#64ffda";
                e.target.style.color = "#0a192f";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "transparent";
                e.target.style.color = "#64ffda";
              }}
              onClick={() => window.open(blog.link, "_blank")} 
            >
              Visit Related Link
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Read;
