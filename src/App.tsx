import React, { useState } from "react";
import "./App.css";
import Newsletter from "./components/newsletter/Newsletter";
import { sampleEvents } from "./data/KAEvent";

function App() {
  const [isEditing, setEditing] = useState<boolean>(false);
  const toggleEditing = () => setEditing(!isEditing);
  return (
    <>
      <div className="acm-navigation-container">
      <div className="acm-navigation-title">KU ACM Newsletter</div>
        <div className="acm-button acm-button-small acm-button-light" onClick={toggleEditing}>
          {isEditing ? "Preview" : "Edit"}
        </div>
      </div>
      {isEditing ? (
        <></>
      ) : (
        <Newsletter date="25 April - 1 May 2022" events={sampleEvents} />
      )}
    </>
  );
}

export default App;
