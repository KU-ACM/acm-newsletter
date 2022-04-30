import React, { useRef, useState } from "react";
import "./App.css";
import Editor from "./components/editor/Editor";
import Newsletter from "./components/newsletter/Newsletter";
import { getHtml } from "./data/ExportHelper";
import { EyeFill, PencilFill, ClipboardPlusFill } from "react-bootstrap-icons";

function App() {
  const [isEditing, setEditing] = useState<boolean>(false);
  const newsletterRef = useRef<HTMLDivElement>(null);

  const toggleEditing = () => setEditing(!isEditing);
  const handleSave = () => {
    if (newsletterRef.current) {
      console.log(getHtml(newsletterRef.current?.outerHTML));
      navigator.clipboard.writeText(newsletterRef.current?.outerHTML);
    }
  };

  return (
    <>
      <div className="acm-navbar">
        <div className="acm-navbar-item-container">
          <div className="acm-navbar-title">KU ACM Newsletter</div>
          <div
            className="acm-navbar-button"
            onClick={toggleEditing}
          >
            {isEditing ? (
              <EyeFill className="acm-navbar-button-icon" />
            ) : (
              <PencilFill className="acm-navbar-button-icon" />
            )}
          </div>
          <div className="acm-navbar-button" onClick={handleSave}>
            <ClipboardPlusFill className="acm-navbar-button-icon" />
          </div>
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
