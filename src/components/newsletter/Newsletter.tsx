import { KAEvent } from "../../data/KAEvent";
import EventCard from "../event-card/EventCard";
import Footer from "../footer/Footer";
import "./newsletter.css";

interface NewsletterProps {
  date: string;
  events: KAEvent[];
}

const Newsletter = (props: NewsletterProps): JSX.Element => {
  return (
    <div className="acm-newsletter-container">
      <div className="acm-newsletter-header">
        <div className="acm-newsletter-header-title">KU ACM NEWSLETTER</div>
        <div className="acm-newsletter-header-date">{props.date}</div>
      </div>
      {props.events.map((e) => (
        <EventCard event={e} />
      ))}
      <Footer />
    </div>
  );
};

export default Newsletter;
