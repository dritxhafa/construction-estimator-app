import React from "react";
export default function Upload() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Upload Your Blueprint</h2>
      <input type="file" accept=".pdf" />
      <p>This is a placeholder. Gauge will read your PDF, take quantities, and estimate pricing.</p>
    </div>
  );
}