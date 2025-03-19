import React, { useState } from "react";
import JsEditor from "./jsEditor.js";
import ReactEditor from "./reactEditor.js";

const CodeEditor = () => {
  const [mode, setMode] = useState("javascript");

  return (
    <div style={{ fontFamily: "'Arial', sans-serif", backgroundColor: "#f5f5f5", minHeight: "100vh", padding: "40px" }}>
      {/* Project Name and Quotes */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ color: "#333", fontSize: "36px", fontWeight: "bold" }}>Code Editor</h1>
        <p style={{ fontStyle: "italic", color: "#555", fontSize: "18px" }}>
          "Empowering your coding experience"
        </p>
      </div>

      {/* Buttons to switch between editors */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "30px" }}>
        <button
          onClick={() => setMode("javascript")}
          style={{
            padding: "12px 30px",
            backgroundColor: mode === "javascript" ? "#007acc" : "#444",
            border: "none",
            color: "white",
            cursor: "pointer",
            borderRadius: "8px",
            fontSize: "18px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease, transform 0.2s ease-in-out",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          JavaScript Editor
        </button>
        <button
          onClick={() => setMode("react")}
          style={{
            padding: "12px 30px",
            backgroundColor: mode === "react" ? "#007acc" : "#444",
            border: "none",
            color: "white",
            cursor: "pointer",
            borderRadius: "8px",
            fontSize: "18px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease, transform 0.2s ease-in-out",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          React Editor
        </button>
      </div>

      {/* Render respective editor based on mode */}
      <div style={{
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        minHeight: "400px",
      }}>
        {mode === "javascript" ? <JsEditor /> : <ReactEditor />}
      </div>
    </div>
  );
};

export default CodeEditor;
