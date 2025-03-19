import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const JsEditor = () => {
    const [code, setCode] = useState("console.log('Hello, JavaScript!');");
    const [output, setOutput] = useState("");

    const runCode = () => {
        try {
            // Redirect console.log to display in UI
            const customConsole = {
                log: (...args) => setOutput((prev) => prev + args.join(" ") + "\n"),
            };

            const sandbox = new Function("console", code);
            sandbox(customConsole);
        } catch (error) {
            setOutput("Error: " + error.message);
        }
    };

    return (
        <div style={{ padding: "10px", backgroundColor: "#1e1e1e", color: "white" }}>
            <h1>JavaScript Code Editor</h1>
            <Editor
                height="60vh"
                language="javascript"
                theme="vs-dark"
                value={code}
                onChange={(value) => setCode(value)}
            />
            <button
                onClick={runCode}
                style={{
                    marginTop: "10px",
                    padding: "10px",
                    backgroundColor: "#007acc",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    borderRadius: "5px",
                }}
            >
                Run JavaScript
            </button>
            <div style={{ marginTop: "10px", padding: "10px", backgroundColor: "#000", color: "#0f0" }}>
                <strong>Console Output:</strong>
                <pre>{output}</pre>
            </div>
        </div>
    );
};

export default JsEditor;
