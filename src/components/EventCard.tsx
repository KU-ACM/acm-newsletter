import React from "react";

export type EventData = {
    date: string;
    title: string;
    description: string;
    cta: string;
  };

interface EventDataProps {
    ed: EventData
}

const EventCard = (props: EventDataProps): JSX.Element => {
    
return <div className="card-container">
          <div className="card-header-container">
            <h3 className="card-header-date">{props.ed.date}</h3>
            <h1 className="card-header-title">{props.ed.title}</h1>
          </div>

          <div className="card-details-container">
            <p className="card-details-description">{props.ed.description}</p>
            <button className="btn btn-light">{props.ed.cta}</button>
          </div>
        </div>; 
}

export default EventCard