import React, { useEffect, useState } from "react";
import "../Card/card.scss";
import timeSinceStart from "../../utils/dateLogic";

interface CardProps {
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
  const [expanded, setExpanded] = useState(false);
  const [time, setTime] = useState("");

  useEffect(()=> {
    defineTime();
  })

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const defineTime = () => {
    const newTime = timeSinceStart(startDate);
    if (newTime.years < 1) {
        setTime(`${newTime.months} months, ${newTime.hours} hours, and ${newTime.minutes} minutes`);
      } else {
        setTime(`${newTime.years} years, ${newTime.hours} hours, and ${newTime.minutes} minutes`);
      }
  }

  return (
    <div className="card">
      <div className="card-main">
        <h1>{title}</h1>
        <h3>{institution}</h3>
        <span>{time}</span>
        {expanded ? (
          <span onClick={handleExpand}>hide</span>
        ) : (
          <span onClick={handleExpand}>Show</span>
        )}
      </div>
      {expanded && <div className="card-details">
        <p>{description}</p>
        </div>}
    </div>
  );
};

export default Card;
