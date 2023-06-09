import React, { useContext, useEffect, useState } from "react";
import Card, { CardProps } from "../../components/Card/Card";
import { getAllEducation } from "../../services/apiCalls";
import '../Education/education.scss'
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";

const Education: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  const [educationInfo, setEducationInfo] = useState<CardProps[]>([]);

  useEffect(() => {
    getEducationInfoToDisplay();
  }, []);

  const getEducationInfoToDisplay = async () => {
    try {
      let response = await getAllEducation();
      setEducationInfo(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={`education-page ${darkMode ? "dark" : ""}`}>
      {educationInfo.map((item: CardProps) => (
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

export default Education;
