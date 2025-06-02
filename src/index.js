import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Upload from "./pages/Upload";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <div style={{ fontFamily: "sans-serif" }}>
      <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#1f2937", color: "#fff" }}>
        <Link style={{ color: "#fff" }} to="/">Home</Link>
        <Link style={{ color: "#fff" }} to="/upload">Upload</Link>
        <Link style={{ color: "#fff" }} to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  </Router>
);