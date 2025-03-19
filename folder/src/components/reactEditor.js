import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import * as Babel from "@babel/standalone";
import ReactDOM from "react-dom/client";

const ReactEditor = () => {
    const [code, setCode] = useState(`
    function App() {
      return <h1>Hello, React Compiler!</h1>;
    }
    render(<App />);
  `);
    const [output, setOutput] = useState("");

    const runCode = () => {
        try {
            const transpiledCode = Babel.transform(code, { presets: ["react"] }).code;
            const customConsole = {
                log: (...args) => setOutput((prev) => prev + args.join(" ") + "\n"),
            };

            const rootElement = document.getElementById("preview");
            if (rootElement) {
                ReactDOM.createRoot(rootElement).render(null);
            }

            const render = (component) => {
                if (rootElement) {
                    ReactDOM.createRoot(rootElement).render(component);
                }
            };

            const sandbox = new Function("console", "React", "ReactDOM", "render", transpiledCode);
            sandbox(customConsole, React, ReactDOM, render);
        } catch (error) {
            setOutput("Error: " + error.message);
        }
    };

    return (
        <div style={{ padding: "10px", backgroundColor: "#1e1e1e", color: "white" }}>
            <h1>React Code Editor</h1>
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
                Run React Code
            </button>
            <div style={{ marginTop: "10px", padding: "10px", backgroundColor: "#000", color: "#0f0" }}>
                <strong>Console Output:</strong>
                <pre>{output}</pre>
            </div>
            <div id="preview" style={{ marginTop: "10px", padding: "10px", backgroundColor: "#222", color: "white" }}>
                <strong>React Output:</strong>
            </div>
        </div>
    );
};

export default ReactEditor;
