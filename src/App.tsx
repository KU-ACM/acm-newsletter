import React from "react";
import logo from "./logo.svg";
import "./App.css";
import EventCard from "./components/event-card/EventCard";
import Footer from "./components/footer/Footer";
import { sampleEvents } from "./data/KAEvent";
import Newsletter from "./components/newsletter/Newsletter";

function App() {
  
  return (
    <Newsletter date="25 April - 1 May 2022" events={sampleEvents}/>  
  );
}

export default App;
