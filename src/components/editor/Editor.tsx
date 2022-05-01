import { ChangeEvent, useContext, useState } from "react";
import { AppContext } from "../../data/AppContext";
import { emptyEvent, KAEvent } from "../../data/KANewsletter";
import { uploadImage } from "../../services/ImageUploadService";
import {
  CardImage,
  PencilFill,
  PlusCircle,
  PlusCircleFill,
} from "react-bootstrap-icons";
import "./editor.css";

const Editor = (): JSX.Element => {
  const { newsletterData, setNewsletterData } = useContext(AppContext);
  const [editingIndex, setEditingIndex] = useState<number>(-1);

  const onEditingIndexChanged = (index: number) => {
    setEditingIndex(index);
  };

  const onEventSaved = (event: KAEvent) => {
    const _events = newsletterData.events;
    _events[editingIndex] = event;
    setNewsletterData({
      date: newsletterData.date,
      events: _events,
    });
    setEditingIndex(-1);
  };

  const onEventCreated = () => {
    const numCurrentEvents = newsletterData.events.length;
    setNewsletterData({
      date: newsletterData.date,
      events: [...newsletterData.events, emptyEvent],
    });
    setEditingIndex(numCurrentEvents);
  };

  const deleteEvent = (event: KAEvent) => {
    setEditingIndex(-1);
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
      <div style={{ padding: 5 }}>
        <div className="acm-editor-form-container">
          <form
            className="acm-editor-form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              type="text"
              style={{ margin: 0 }}
              placeholder="Newsletter date"
              onChange={handleDateChange}
            />
          </form>
        </div>
      </div>
      <div className="acm-editor-subtitle">Events</div>
      <div className="acm-editor-event-preview-container">
        {newsletterData.events.map((e) => (
          <>
            {editingIndex === newsletterData.events.indexOf(e) ? (
              <EventForm onSave={onEventSaved} index={editingIndex} />
            ) : (
              <div className="acm-editor-event-preview" key={e.title}>
                <div
                  className="acm-editor-event-preview-edit-button"
                  onClick={() =>
                    onEditingIndexChanged(newsletterData.events.indexOf(e))
                  }
                >
                  <PencilFill />
                </div>
                <div className="acm-editor-event-preview-title">{e.title}</div>
                <div
                  className="acm-editor-event-preview-delete-button"
                  onClick={() => deleteEvent(e)}
                >
                  Delete
                </div>
              </div>
            )}
          </>
        ))}
        {editingIndex === -1 && (
          <div
            className="acm-editor-event-preview"
            onClick={onEventCreated}
            style={{
              cursor: "pointer",
              backgroundColor: "#0275d8",
              color: "#fff",
            }}
          >
            <div
              className="acm-editor-event-preview-edit-button"
              style={{ color: "#fff" }}
            >
              <PlusCircleFill />
            </div>
            <div
              className="acm-editor-event-preview-title"
              style={{ fontWeight: 500 }}
            >
              New Event
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

interface EventFormProps {
  index: number;
  onSave: Function;
}
const EventForm = (props: EventFormProps): JSX.Element => {
  const { newsletterData } = useContext(AppContext);
  const [eventImgSrc, setEventImgSrc] = useState<string>(
    newsletterData.events[props.index].img_src
  );
  const [eventTitle, setEventTitle] = useState<string>(
    newsletterData.events[props.index].title
  );
  const [eventDate, setEventDate] = useState<string>(
    newsletterData.events[props.index].date
  );
  const [eventTime, setEventTime] = useState<string>(
    newsletterData.events[props.index].time
  );
  const [eventVenue, setEventVenue] = useState<string>(
    newsletterData.events[props.index].venue
  );
  const [eventDescription, setEventDescription] = useState<string>(
    newsletterData.events[props.index].description
  );
  const [eventCTA, setEventCTA] = useState<string>(
    newsletterData.events[props.index].cta
  );
  const [eventCTAURL, setEventCTAURL] = useState<string>(
    newsletterData.events[props.index].cta_url
  );

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
      <div className="acm-editor-form-title">
        {eventTitle === "" ? "New Event" : "Editing: " + eventTitle}
      </div>
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
          type="text"
          placeholder="Title"
          onChange={(e) => setEventTitle(e.target.value)}
          value={eventTitle}
        />
        <div className="acm-editor-form-row">
          <div className="acm-editor-form-label-input-group">
            <div className="acm-editor-form-label">Date</div>
            <input
              type="text"
              placeholder="Date"
              onChange={(e) => setEventDate(e.target.value)}
              value={eventDate}
            />
          </div>
          <div className="acm-editor-form-label-input-group">
            <div className="acm-editor-form-label">Time</div>
            <input
              type="text"
              placeholder="Time"
              onChange={(e) => setEventTime(e.target.value)}
              value={eventTime}
            />
          </div>
          <div className="acm-editor-form-label-input-group">
            <div className="acm-editor-form-label">Venue</div>
            <input
              type="text"
              placeholder="Venue"
              onChange={(e) => setEventVenue(e.target.value)}
              value={eventVenue}
            />
          </div>
        </div>
        <div className="acm-editor-form-label">Description</div>
        <textarea
          placeholder="Description"
          onChange={(e) => setEventDescription(e.target.value)}
          value={eventDescription}
        />
        <div className="acm-editor-form-row">
          <div className="acm-editor-form-label-input-group">
            <div className="acm-editor-form-label">CTA</div>
            <input
              type="text"
              placeholder="CTA"
              onChange={(e) => setEventCTA(e.target.value)}
              value={eventCTA}
            />
          </div>
          <div className="acm-editor-form-label-input-group">
            <div className="acm-editor-form-label">CTA URL</div>
            <input
              type="text"
              placeholder="CTA URL"
              onChange={(e) => setEventCTAURL(e.target.value)}
              value={eventCTAURL}
            />
          </div>
        </div>
        <input
          type="submit"
          className="acm-button"
          value="Save"
          style={{ marginBottom: 0, justifyContent: "center" }}
        />
      </form>
    </div>
  );
};

export default Editor;
