import React from "react";
import logo from "./logo.svg";
import "./App.css";
import EventCard, { EventData } from "./components/EventCard";

const sampleDate: string = "25 April, Monday • 20:30";

const sampleEvent: EventData = {
  datetime: sampleDate,
  title: "Ask Alumni - Berker Soyluoğlu",
  description:
    "Ask Alumni is here once again! This time in Ask Alumni, Berker Soyluoğlu from Facebook will be our guest and talk about his experiences and his life after graduation. After his talk, he will be answering the students’ questions.",
  cta: "Register now!",
  img_src: "https://i.ibb.co/jgj5sfp/ask-alumni-final.png",
};

const sampleEvent2: EventData = {
  datetime: sampleDate,
  title: "Basics of LaTeX Workshop",
  description:
    "On April 27th, Ahmet Yesevi Nurcan from our club will be teaching the basics of LaTeX. If you want to build a career in Academics or want to create professionally written documents, don’t miss out on the opportunity and sign up for “Basics of LaTeX”!",
  cta: "Register now!",
  img_src: "https://i.ibb.co/SmdWMD9/final.png",
};

const events: EventData[] = [sampleEvent, sampleEvent2];

function App() {
  return (
    <div className="acm-app-container">
      <div className="acm-app-header">
        <div className="acm-app-header-title">KU ACM NEWSLETTER</div>
        <div className="acm-app-header-datetime">25 April - 1 May 2022</div>
      </div>
      {events.map((e) => (
        <EventCard ed={e} />
      ))}
      <div className="acm-app-footer"></div>
    </div>
  );
}

export default App;
