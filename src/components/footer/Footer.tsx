import "./footer.css";

const Footer = (): JSX.Element => {
  return (
    <div className="acm-footer">
      <div className="acm-footer-title">Follow us on social media:</div>
      <div className="acm-social-icons-container">{socialIcons}</div>
    </div>
  );
};

const instagramIcon = (
  <a key="instagram" href="https://www.instagram.com/kuacm/" target="_blank">
    <img
      className="acm-social-icon"
      src="https://i.ibb.co/BTWkYqq/6636566-instagram-social-media-social-network-icon.png"
      alt="Instagram"
    />
  </a>
);

const facebookIcon = (
  <a
    key="facebook"
    href="https://www.facebook.com/kuacmchapter/"
    target="_blank"
  >
    <img
      className="acm-social-icon"
      src="https://i.ibb.co/k4LvC2X/4696483-circle-facebook-media-network-social-icon.png"
      alt="Facebook"
    />
  </a>
);

const twitterIcon = (
  <a key="twitter" href="https://twitter.com/KU_ACM" target="_blank">
    <img
      className="acm-social-icon"
      src="https://i.ibb.co/q1fYhtx/771365-circle-logo-media-network-social-icon.png"
      alt="Twitter"
    />
  </a>
);

const youtubeIcon = (
  <a
    key="youtube"
    href="https://www.youtube.com/channel/UCNYX647yFgLltaOjR0OJGkw"
    target="_blank"
  >
    <img
      className="acm-social-icon"
      src="https://i.ibb.co/cxLHGz5/yt.png"
      alt="YouTube"
    />
  </a>
);

const spotifyIcon = (
  <a
    key="spotify"
    href="https://open.spotify.com/user/9u9kot80wzkz1usmok1lk5woa?si=Kv7GrariRPG3bVZV_mOWP6A"
    target="_blank"
  >
    <img
      className="acm-social-icon"
      src="https://i.ibb.co/20JMWTL/1632528-circle-music-round-icon-spotify-icon.png"
      alt="Spotify"
    />
  </a>
);

const linkedinIcon = (
  <a
    key="linkedin"
    href="https://www.linkedin.com/company/28950912/"
    target="_blank"
  >
    <img
      className="acm-social-icon"
      src="https://i.ibb.co/dGjzScY/771370-circle-linkedin-logo-media-network-icon.png"
      alt="LinkedIn"
    />
  </a>
);

const socialIcons = [
  instagramIcon,
  facebookIcon,
  linkedinIcon,
  twitterIcon,
  youtubeIcon,
  spotifyIcon,
];

export default Footer;
