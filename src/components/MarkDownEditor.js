import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
  const [text, setText] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setPreview(text);
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App" style={{ display: "flex", gap: "2rem" }}>
      <textarea
        className="textarea"
        value={text}
        onChange={handleChange}
        placeholder="Enter Markdown text..."
        style={{ flex: 1, height: "400px" }}
      />
      <div className="preview" style={{ flex: 1, border: "1px solid #ccc", padding: "1rem", height: "400px", overflowY: "auto" }}>
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </div>
  );
}

export default MarkdownEditor;
