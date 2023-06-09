import React, { useContext, useEffect, useState } from "react";
import Card, { CardProps } from "../../components/Card/Card";
import { getAllExperience } from "../../services/apiCalls";
import "../Experience/experience.scss";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";

const Experience: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [experienceInfo, setExperienceInfo] = useState<CardProps[]>([]);

  useEffect(() => {
    getExperienceInfoToDisplay();
  }, []);

  const getExperienceInfoToDisplay = async () => {
    try {
      let response = await getAllExperience();
      setExperienceInfo(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={`experience-page ${darkMode ? "dark" : ""}`}>
      {experienceInfo.map((item: CardProps) => (
        <Card
          key={item.id}
          title={item.title}
          institution={item.institution}
          startDate={item.startDate}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Experience;
