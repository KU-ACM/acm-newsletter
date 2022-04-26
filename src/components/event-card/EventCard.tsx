import { KAEvent } from "../../data/KAEvent";
import "./eventCard.css";
interface EventCardProps {
  event: KAEvent;
}

const EventCard = (props: EventCardProps): JSX.Element => {
  return (
    <div className="acm-card-container">
      <img className="acm-card-img" src={props.event.img_src} alt="event" />
      <div className="acm-card-header-container">
        <div className="acm-card-header-datetime">
          {props.event.date + " • " + props.event.time}
        </div>
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
