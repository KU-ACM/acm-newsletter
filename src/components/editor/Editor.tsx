import { ChangeEvent, useContext, useState } from "react";
import { AppContext } from "../../data/AppContext";
import { KAEvent } from "../../data/KANewsletter";
import { uploadImage } from "../../services/ImageUploadService";
import { CardImage } from "react-bootstrap-icons";
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

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewsletterData({
      date: e.target.value,
      events: newsletterData.events,
    });
  };

  return (
    <div className="acm-editor-container">
      <div className="acm-editor-title">Newsletter Editor</div>
      <div className="acm-editor-subtitle">Date</div>
      <div className="acm-editor-form-container">
        <form className="acm-editor-form">
          <input
            type="text"
            required
            className="acm-editor-form-file-input"
            style={{ margin: 0 }}
            placeholder="Newsletter date"
            onChange={handleDateChange}
          />
        </form>
      </div>
      <div className="acm-editor-subtitle">Events</div>
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

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    if (file) {
      uploadImage(file).then((result) => {
        setEventImgSrc(result);
      });
    }
  };

  return (
    <div className="acm-editor-form-container">
      <div className="acm-editor-form-title">New Event</div>
      <form
        className="acm-editor-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSave();
        }}
      >
        <div className="acm-editor-form-label">Image</div>
        <div className="acm-editor-form-file-input-container">
          <div className="acm-editor-form-file-image-preview">
            {eventImgSrc ? (
              <img
                src={eventImgSrc}
                className="acm-editor-form-file-image"
                alt=""
              />
            ) : (
              <CardImage size={32} color="#424242" />
            )}
          </div>
          <div className="acm-editor-form-file-input-upload-area">
            <div className="acm-editor-form-file-url">
              <div style={{ fontWeight: "bold" }}>Image URL: </div>
              {eventImgSrc ? (
                <a href={eventImgSrc}>{eventImgSrc}</a>
              ) : (
                <div style={{ fontStyle: "italic" }}>No file selected</div>
              )}
            </div>
            <div className="acm-editor-form-file-input-button">
              <div>Choose file</div>
              <input
                required
                className="acm-editor-form-file-input"
                accept="image/png, image/jpeg"
                type="file"
                onChange={handleImageUpload}
              />
            </div>
          </div>
        </div>
        <div className="acm-editor-form-label">Title</div>
        <input
          required
          type="text"
          placeholder="Title"
          onChange={(e) => setEventTitle(e.target.value)}
        />
        <div className="acm-editor-form-label">Date</div>
        <input
          
          type="text"
          placeholder="Date"
          onChange={(e) => setEventDate(e.target.value)}
        />
        <div className="acm-editor-form-label">Time</div>
        <input
          
          type="text"
          placeholder="Time"
          onChange={(e) => setEventTime(e.target.value)}
        />
        <div className="acm-editor-form-label">Venue</div>
        <input
          
          type="text"
          placeholder="Venue"
          onChange={(e) => setEventVenue(e.target.value)}
        />
        <div className="acm-editor-form-label">Description</div>
        <textarea
          required
          placeholder="Description"
          onChange={(e) => setEventDescription(e.target.value)}
        />
        <div className="acm-editor-form-label">CTA</div>
        <input
          type="text"
          placeholder="CTA"
          onChange={(e) => setEventCTA(e.target.value)}
        />
        <div className="acm-editor-form-label">CTA URL</div>
        <input
          type="text"
          placeholder="CTA URL"
          onChange={(e) => setEventCTAURL(e.target.value)}
        />
        <input
          type="submit"
          className="acm-button"
          value="Add Event"
          style={{ marginBottom: 0 }}
        />
      </form>
    </div>
  );
};

export default Editor;
