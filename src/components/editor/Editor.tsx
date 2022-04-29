import events from "events";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../data/AppContext";
import { KANewsletter, KAEvent } from "../../data/KANewsletter";
import "./editor.css";

const Editor = (): JSX.Element => {
  const { newsletterData, setNewsletterData } = useContext(AppContext);

  const onEventAdded = (event: KAEvent) => {
    setNewsletterData({
      date: newsletterData.date,
      events: [...newsletterData.events, event],
    });
  };

  return (
    <div className="acm-editor-container">
      {newsletterData.events.map((e) => (
        <div>{e.title}</div>
      ))}
      <EventForm onSave={onEventAdded} index={0} />
    </div>
  );
};

interface EventFormProps {
  index: number;
  onSave: Function;
}
const EventForm = (props: EventFormProps): JSX.Element => {
  const [eventImgSrc, setEventImgSrc] = useState<string>("");
  const [eventTitle, setEventTitle] = useState<string>("");
  const [eventDate, setEventDate] = useState<string>("");
  const [eventTime, setEventTime] = useState<string>("");
  const [eventVenue, setEventVenue] = useState<string>("");
  const [eventDescription, setEventDescription] = useState<string>("");
  const [eventCTA, setEventCTA] = useState<string>("");
  const [eventCTAURL, setEventCTAURL] = useState<string>("");

  const handleSave = () => {
    const event: KAEvent = {
      img_src: eventImgSrc,
      title: eventTitle,
      date: eventDate,
      time: eventTime,
      venue: eventVenue,
      description: eventDescription,
      cta: eventCTA,
      cta_url: eventCTAURL,
    };

    props.onSave(event);
  };

  return (
    <div className="acm-editor-event-form-container">
      <form className="acm-editor-event-form">
        <input
          type="text"
          placeholder="Event image URL"
          onChange={(e) => setEventImgSrc(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event name"
          onChange={(e) => setEventTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event date"
          onChange={(e) => setEventDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event time"
          onChange={(e) => setEventTime(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event venue"
          onChange={(e) => setEventVenue(e.target.value)}
        />
        <textarea
          placeholder="Event description"
          onChange={(e) => setEventDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event CTA"
          onChange={(e) => setEventCTA(e.target.value)}
        />
        <input
          type="text"
          placeholder="Event CTA URL"
          onChange={(e) => setEventCTAURL(e.target.value)}
        />
      </form>
      <div className="acm-button" onClick={handleSave}>
        Add Event
      </div>
    </div>
  );
};

export default Editor;
