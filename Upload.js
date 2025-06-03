import React, { useState } from "react";
export default function Upload() {
  const [file, setFile] = useState(null);
  return (
    <div style={{ padding: "3rem" }}>
      <h2>Upload Your Blueprint</h2>
      <input
        type="file"
        accept=".pdf"
        onChange={(e) => setFile(e.target.files[0])}
        style={{ marginTop: "1rem" }}
      />
      {file && (
        <p style={{ marginTop: "1rem" }}>
          File uploaded: <strong>{file.name}</strong>
        </p>
      )}
      <p style={{ marginTop: "1rem" }}>
        (Coming Soon) Gauge will extract quantities and provide RSMeans-based cost estimates.
      </p>
    </div>
  );
}