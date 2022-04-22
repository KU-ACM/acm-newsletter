import React from "react";
import logo from "./logo.svg";
import "./App.css";
import EventCard, { EventData } from "./components/EventCard";

const sampleDate: string = "25 April, Monday";

const sampleEvent: EventData = {
  date: sampleDate,
  title: "Ask Alumni - Berker Soyluoğlu",
  description:
    "Ask Alumni is here once again! This time in Ask Alumni, Berker Soyluoğlu from Facebook will be our guest and talk about his experiences and his life after graduation. After his talk, he will be answering the students’ questions.",
  cta: "Register now!",
};

const sampleEvent2: EventData = {
  date: sampleDate,
  title: "KUrypto",
  description:
    "Ask Alumni is here once again! This time in Ask Alumni, Berker Soyluoğlu from Facebook will be our guest and talk about his experiences and his life after graduation. After his talk, he will be answering the students’ questions.",
  cta: "Register now!",
};

const events: EventData[] = [sampleEvent, sampleEvent2];

function App() {
  return (
    <div className="container">
      
      {events.map((e) => <EventCard ed={e}/> )}
    </div>
  );
}

export default App;


