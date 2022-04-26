import "./eventCard.css";

export type EventData = {
  datetime: string;
  title: string;
  description: string;
  cta: string;
  img_src: string;
};

interface EventDataProps {
  ed: EventData;
}

const EventCard = (props: EventDataProps): JSX.Element => {
  return (
    <div className="acm-card-container">
      <img
        className="acm-card-img"
        src={props.ed.img_src}
        alt="event"
      />
      <div className="acm-card-header-container">
        <div className="acm-card-header-datetime">{props.ed.datetime}</div>
        <div className="acm-card-header-title">{props.ed.title}</div>
      </div>
      <div className="acm-card-details-container">
        <div className="acm-card-details-description">
          {props.ed.description}
        </div>
        <button className="acm-button acm-card-details-cta">
          {props.ed.cta}
        </button>
      </div>
    </div>
  );
};

export default EventCard;
