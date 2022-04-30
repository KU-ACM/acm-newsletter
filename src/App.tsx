import React, { useRef, useState } from "react";
import "./App.css";
import Editor from "./components/editor/Editor";
import Newsletter from "./components/newsletter/Newsletter";
import { getHtml } from "./data/ExportHelper";

function App() {
  const [isEditing, setEditing] = useState<boolean>(false);
  const newsletterRef = useRef<HTMLDivElement>(null);

  const toggleEditing = () => setEditing(!isEditing);
  const handleSave = () => {
    if (newsletterRef.current) {
      console.log(getHtml(newsletterRef.current?.outerHTML));
    }
  };

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
        <div
          className="acm-button acm-button-small acm-button-light"
          onClick={handleSave}
        >
          Save
        </div>
      </div>
      {isEditing ? (
        <Editor />
      ) : (
        <div ref={newsletterRef}>
          <Newsletter />
        </div>
      )}
    </>
  );
}

export default App;
