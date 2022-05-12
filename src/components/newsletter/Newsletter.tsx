import { useContext } from "react";
import { AppContext } from "../../data/AppContext";
import { KAEvent, KANewsletter } from "../../data/KANewsletter";
import EventCard from "../event-card/EventCard";
import Footer from "../footer/Footer";
import "./newsletter.css";

const Newsletter = (): JSX.Element => {
  const { newsletterData } = useContext(AppContext);

  return (
    <div className="acm-newsletter-container">
      {newsletterData.hasHeader && <div className="acm-newsletter-header">
        <div className="acm-newsletter-header-title">{newsletterData.title}</div>
        <div className="acm-newsletter-header-date">{newsletterData.date}</div>
      </div>}
      {newsletterData.events.map((e) => (
        <EventCard event={e} />
      ))}
      <Footer />
    </div>
  );
};

export default Newsletter;
