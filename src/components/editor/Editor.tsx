import { useContext, useState } from "react";
import { AppContext } from "../../data/AppContext";
import { KAEvent } from "../../data/KANewsletter";
import "./editor.css";

const Editor = (): JSX.Element => {
  const { newsletterData, setNewsletterData } = useContext(AppContext);

  const onEventAdded = (event: KAEvent) => {
    setNewsletterData({
      date: newsletterData.date,
      events: [...newsletterData.events, event],
    });
  };

  const deleteEvent = (event: KAEvent) => {
    setNewsletterData({
      date: newsletterData.date,
      events: newsletterData.events.filter((e) => e !== event),
    });
  };

  return (
    <div className="acm-editor-container">
      <div className="acm-editor-event-preview-container">
        {newsletterData.events.map((e) => (
          <div className="acm-editor-event-preview" key={e.title}>
            <div className="acm-editor-event-preview-title">{e.title}</div>
            <div
              className="acm-editor-event-preview-delete-button"
              onClick={() => deleteEvent(e)}
            >
              ⨉
            </div>
          </div>
        ))}
      </div>
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
      <div className="acm-editor-event-form-title">New Event</div>
      <form
        className="acm-editor-event-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <div className="acm-editor-event-form-label">Image URL</div>
        <input
          required
          type="text"
          placeholder="Image URL"
          onChange={(e) => setEventImgSrc(e.target.value)}
        />
        <div className="acm-editor-event-form-label">Title</div>
        <input
          required
          type="text"
          placeholder="Title"
          onChange={(e) => setEventTitle(e.target.value)}
        />
        <div className="acm-editor-event-form-label">Date</div>
        <input
          required
          type="text"
          placeholder="Date"
          onChange={(e) => setEventDate(e.target.value)}
        />
        <div className="acm-editor-event-form-label">Time</div>
        <input
          required
          type="text"
          placeholder="Time"
          onChange={(e) => setEventTime(e.target.value)}
        />
        <div className="acm-editor-event-form-label">Venue</div>
        <input
          required
          type="text"
          placeholder="Venue"
          onChange={(e) => setEventVenue(e.target.value)}
        />
        <div className="acm-editor-event-form-label">Description</div>
        <textarea
          required
          placeholder="Description"
          onChange={(e) => setEventDescription(e.target.value)}
        />
        <div className="acm-editor-event-form-label">CTA</div>
        <input
          type="text"
          placeholder="CTA"
          onChange={(e) => setEventCTA(e.target.value)}
        />
        <div className="acm-editor-event-form-label">CTA URL</div>
        <input
          type="text"
          placeholder="CTA URL"
          onChange={(e) => setEventCTAURL(e.target.value)}
        />
        <input type="submit" className="acm-button" value="Add Event" style={{marginBottom: 0}}/>
      </form>
    </div>
  );
};

export default Editor;
