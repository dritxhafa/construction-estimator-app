import React from "react";
export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Welcome to Gauge</h1>
      <p>Your AI-powered construction estimation assistant.</p>
      <a href="/upload">Upload Blueprint</a> | <a href="/about">About Us</a>
    </div>
  );
}