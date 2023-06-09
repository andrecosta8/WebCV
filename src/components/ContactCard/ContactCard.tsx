import React, { useContext } from "react";
import "../ContactCard/contactCard.scss";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";

export interface ContactCardProps {
  id?: string;
  logo: string;
  type: string;
  info?: string;
  url?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ logo, type, info, url }) => {
  const { darkMode } = useContext(DarkModeContext);

  const handleSocialMediaLink = (url: string | undefined): any => {
    window.open(url, "_blank");
  };

  return (
    <div
      className={`contact-card ${darkMode ? "dark" : ""}`}
      onClick={url ? () => handleSocialMediaLink(url) : undefined}
    >
      {logo && <img className="contact-logo" src={logo} alt={type} />}
      <p>{type}</p>
      <p>{info}</p>
    </div>
  );
};

export default ContactCard;
