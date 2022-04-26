import React from "react";
import logo from "./logo.svg";
import "./App.css";
import EventCard from "./components/event-card/EventCard";
import Footer from "./components/footer/Footer";
import { sampleEvents } from "./data/KAEvent";

function App() {
  const events = sampleEvents;
  return (
    <div className="acm-app-container">
      <div className="acm-app-header">
        <div className="acm-app-header-title">KU ACM NEWSLETTER</div>
        <div className="acm-app-header-datetime">25 April - 1 May 2022</div>
      </div>
      {events.map((e) => (
        <EventCard event={e} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
