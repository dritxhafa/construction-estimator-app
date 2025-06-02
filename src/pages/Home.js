import React from "react";
export default function Home() {
  return (
    <div style={{ padding: "3rem" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#111827" }}>Welcome to Gauge</h1>
      <p style={{ fontSize: "1.25rem", marginTop: "1rem" }}>
        The future of AI-powered construction estimating is here.
      </p>
      <a href="/upload" style={{
        display: "inline-block",
        marginTop: "2rem",
        padding: "0.75rem 1.5rem",
        backgroundColor: "#2563eb",
        color: "white",
        borderRadius: "0.5rem",
        textDecoration: "none"
      }}>
        Upload a Blueprint
      </a>
    </div>
  );
}