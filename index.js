import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Upload from "./pages/Upload";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <nav style={{ background: "#0f172a", padding: "1rem", color: "#fff", display: "flex", gap: "2rem" }}>
        <Link style={{ color: "#fff", textDecoration: "none" }} to="/">Home</Link>
        <Link style={{ color: "#fff", textDecoration: "none" }} to="/upload">Upload</Link>
        <Link style={{ color: "#fff", textDecoration: "none" }} to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </Router>
);