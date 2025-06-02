import React from "react";
export default function Upload() {
  return (
    <div style={{ padding: "3rem" }}>
      <h2>Upload a Blueprint</h2>
      <input type="file" accept=".pdf" />
      <p style={{ marginTop: "1rem" }}>
        This is a preview. Gauge will read the PDF, extract takeoffs, and estimate your project using RSMeans.
      </p>
    </div>
  );
}