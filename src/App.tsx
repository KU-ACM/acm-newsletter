import React, { useState } from "react";
import "./App.css";
import Editor from "./components/editor/Editor";
import Newsletter from "./components/newsletter/Newsletter";
import { sampleNewsletter } from "./data/KANewsletter";

function App() {
  const [isEditing, setEditing] = useState<boolean>(false);
  const toggleEditing = () => setEditing(!isEditing);
  return (
    <>
      <div className="acm-navigation-container">
        <div className="acm-navigation-title">KU ACM Newsletter</div>
        <div
          className="acm-button acm-button-small acm-button-light"
          onClick={toggleEditing}
        >
          {isEditing ? "Preview" : "Edit"}
        </div>
      </div>
      {isEditing ? (
        <Editor />
      ) : (
        <Newsletter data={sampleNewsletter} />
      )}
    </>
  );
}

export default App;
