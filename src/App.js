import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import About from "./components/About";   
import Skill from "./components/Skill";     
import Project from "./components/Project"; 
import Contact from "./components/Contact"; 
import Blog from "./components/Blog";         
import Resume from "./components/Resume";     
import Footer from "./components/Footer";     

function App() {
  return (
    <Router>
      {/* Updated Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top shadow" style={{
        backgroundColor: "rgba(10, 25, 47, 0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(100, 255, 218, 0.1)",
        padding: "1rem 0",
        transition: "all 0.3s ease"
      }}>
        <div className="container">
          <Link 
            className="navbar-brand fw-bold" 
            to="/"
            style={{
              color: "#64ffda",
              fontSize: "1.5rem",
              letterSpacing: "0.1em"
            }}
          >
            Edith
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{
              border: "1px solid #64ffda"
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="/"
                  style={{
                    color: "#ccd6f6",
                    fontWeight: "500",
                    margin: "0 0.5rem",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#64ffda";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ccd6f6";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Home
                </Link>
              </li>
              
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="/About"
                  style={{
                    color: "#ccd6f6",
                    fontWeight: "500",
                    margin: "0 0.5rem",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#64ffda";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ccd6f6";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  About Me
                </Link>
              </li>
              
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="/Skill"
                  style={{
                    color: "#ccd6f6",
                    fontWeight: "500",
                    margin: "0 0.5rem",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#64ffda";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ccd6f6";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Skills
                </Link>
              </li>
              
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="/Project"
                  style={{
                    color: "#ccd6f6",
                    fontWeight: "500",
                    margin: "0 0.5rem",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#64ffda";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ccd6f6";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Projects
                </Link>
              </li>
              
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="/Blog"
                  style={{
                    color: "#ccd6f6",
                    fontWeight: "500",
                    margin: "0 0.5rem",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#64ffda";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ccd6f6";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Blog
                </Link>
              </li>
              
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="/Resume"
                  style={{
                    color: "#ccd6f6",
                    fontWeight: "500",
                    margin: "0 0.5rem",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#64ffda";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ccd6f6";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Resume
                </Link>
              </li>
              
              <li className="nav-item">
                <Link 
                  className="nav-link" 
                  to="/Contact"
                  style={{
                    color: "#ccd6f6",
                    fontWeight: "500",
                    margin: "0 0.5rem",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "#64ffda";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "#ccd6f6";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div style={{ marginTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skill" element={<Skill />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;