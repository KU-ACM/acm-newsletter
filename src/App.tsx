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
};

const sampleEvent2: EventData = {
  datetime: sampleDate,
  title: "KUrypto",
  description:
    "Ask Alumni is here once again! This time in Ask Alumni, Berker Soyluoğlu from Facebook will be our guest and talk about his experiences and his life after graduation. After his talk, he will be answering the students’ questions. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, veniam accusantium. Assumenda at voluptatum inventore enim dolor a accusantium voluptates aut magni expedita nemo sunt quae, quo nihil aperiam necessitatibus dolore voluptatem magnam! Adipisci ullam debitis quae! Consequatur qui, cupiditate dolorem quidem voluptatum, ab sint voluptatem porro ducimus saepe, corporis placeat quae atque? Dignissimos nemo necessitatibus iure totam facLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat tincidunt lacus, ac tempus quam aliquam vitae. Nullam ultrices placerat diam a lobortis. Mauris placerat enim arcu, et auctor orci hendrerit at. Mauris nec ante orci. Aliquam at ipsum euismod, tincidunt mauris ac, interdum elit. Phasellus porta erat ut nulla dapibus dictum. Curabitur id felis ut nisi eleifend tempor in a eros. Nullam at nibh eget elit molestie ultricies sollicitudin vel magna. Mauris sagittis tincidunt lorem.",
  cta: "Register now!",
};

const events: EventData[] = [sampleEvent, sampleEvent2];

function App() {
  return (
    <div className="acm-app-container">
      {events.map((e) => (
        <EventCard ed={e} />
      ))}
    </div>
  );
}

export default App;
