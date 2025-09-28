import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./Images/logo.png";

import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Read from "./components/Read"; 

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark fixed-top shadow"
        style={{
          backgroundColor: "rgba(10, 25, 47, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(100, 255, 218, 0.1)",
          padding: "0.5rem 0",
          transition: "all 0.3s ease",
        }}
      >
        <div className="container">
          <Link
            className="navbar-brand"
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                background: "linear-gradient(45deg, #64ffda 0%, #0a192f 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "10px",
                border: "0px solid #64ffda",
                overflow: "hidden",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.1)";
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(100, 255, 218, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <img
                src={logo}
                alt="Edith Logo"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid #0a192f",
                }}
              />
            </div>
            <span
              style={{
                color: "#64ffda",
                fontSize: "1.5rem",
                fontWeight: "700",
                letterSpacing: "0.1em",
              }}
            >
              Edith
            </span>
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
              border: "1px solid #64ffda",
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Skill">
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Project">
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Resume">
                  Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Page Routes */}
      <div style={{ marginTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skill" element={<Skill />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/read/:id" element={<Read />} /> {/* ✅ Fixed */}
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
