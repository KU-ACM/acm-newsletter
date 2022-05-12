import { KAEvent } from "../../data/KANewsletter";
import "./eventCard.css";
interface EventCardProps {
  event: KAEvent;
}

const EventCard = (props: EventCardProps): JSX.Element => {
  return (
    <div className="acm-card-container">
      {props.event.img_src !== "" && (
        <img className="acm-card-img" src={props.event.img_src} alt="event" />
      )}
      <div className="acm-card-header-container">
        {(props.event.date || props.event.time || props.event.venue) && (
          <div className="acm-card-header-dtv-container">
            {props.event.date && (
              <div className="acm-card-header-dtv">{props.event.date}</div>
            )}
            {props.event.time && (
              <div className="acm-card-header-dtv">{props.event.time}</div>
            )}
            {props.event.venue && (
              <div className="acm-card-header-dtv">{props.event.venue}</div>
            )}
          </div>
        )}
        <div className="acm-card-header-title">{props.event.title}</div>
      </div>

      <div className="acm-card-details-container">
        <div className="acm-card-details-description">
          {props.event.description}
        </div>
        {props.event.cta && (
          <a href={props.event.cta_url} target="_blank">
            <button className="acm-button acm-card-details-cta">
              {props.event.cta}
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default EventCard;
