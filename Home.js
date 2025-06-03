import React from "react";
export default function Home() {
  return (
    <div style={{ padding: "4rem", textAlign: "center", backgroundColor: "#f8fafc" }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "#1e293b" }}>Welcome to Gauge</h1>
      <p style={{ fontSize: "1.25rem", color: "#334155" }}>
        AI-powered construction blueprint analysis and estimation in seconds.
      </p>
      <a href="/upload" style={{
        marginTop: "2rem",
        display: "inline-block",
        background: "#2563eb",
        color: "#fff",
        padding: "0.75rem 1.5rem",
        borderRadius: "0.375rem",
        textDecoration: "none",
        fontSize: "1rem"
      }}>
        Upload Your Blueprint
      </a>
    </div>
  );
}