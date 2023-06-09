import React, { useContext, useEffect, useState } from "react";
import "../Card/card.scss";
import timeSinceStart from "../../utils/dateLogic";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";

export interface CardProps {
  id?: string;
  title: string;
  institution: string;
  startDate: Date;
  description: string;
}

const Card: React.FC<CardProps> = ({
  title,
  institution,
  startDate,
  description,
}) => {
  const { darkMode } = useContext(DarkModeContext);
  const [expanded, setExpanded] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    defineTime();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setInterval(defineTime, 60 * 1000);
  });

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const defineTime = () => {
    const newTime = timeSinceStart(startDate);
    if (newTime.years < 1) {
      setTime(
        `${newTime.months} months, ${newTime.hours} hours, and ${newTime.minutes} minutes`
      );
    } else {
      setTime(
        `${newTime.years} years, ${newTime.hours} hours, and ${newTime.minutes} minutes`
      );
    }
  };

  return (
    <div className={`card ${darkMode ? "dark" : ""} `}>
      <div className="card-main">
        <h1 className="title">{title}</h1>
        <h3 className="institution">{institution}</h3>
        <div className="time">{time}</div>
        {!expanded ? (
          <div className="toggle" onClick={handleExpand}>
            Show More
          </div>
        ) : null}
      </div>
      {expanded && (
        <div className="card-details">
          <p className="card-description">{description}</p>
          <div className="toggle" onClick={handleExpand}>
            Hide
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
