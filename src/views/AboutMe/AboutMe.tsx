import React, { useContext } from "react";
import "../../views/AboutMe/aboutme.scss";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";

const AboutMe: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="aboutme-page">
      <div className={`about-leftside ${darkMode ? "dark" : ""} `}>
        <div className="foto"></div>
        <p>André Costa</p>
        <p>Porto, Portugal</p>
      </div>
      <div className={`about-rightside ${darkMode ? "dark" : ""} `}>
        <h1>About me...</h1>
        <p className="description">
          As a Frontend Developer with an MSc in Applied Biology, I offer a
          unique fusion of scientific expertise, a decade of research
          experience, and proficiency in coding, blending creativity and
          technical skills. As an experienced traveler, I enjoy immersing myself
          in local cultures and capturing their essence through photography,
          with a focus on nature and street scenes. As a sci-fi aficionado, I am
          constantly inspired by the boundless possibilities of the genre. My
          love for cats, particularly my two plump Siamese companions, further
          reflects my caring and empathetic nature. If you're looking for a
          dynamic team player, with an adventurous spirit, eager to launch
          himself into innovative projects and adapt to constantly changing
          environments, but always learning and embracing challenges, you've
          found the right person! I'm excited to make a real impact on projects
          and support the team's success. 🦄 As a Frontend Developer with an MSc
          in Applied Biology, I offer a unique fusion of scientific expertise, a
          decade of research experience, and proficiency in coding, blending
          creativity and technical skills. As an experienced traveler, I enjoy
          immersing myself in local cultures and capturing their essence through
          photography, with a focus on nature and street scenes. As a sci-fi
          aficionado, I am constantly inspired by the boundless possibilities of
          the genre. My love for cats, particularly my two plump Siamese
          companions, further reflects my caring and empathetic nature. If
          you're looking for a dynamic team player, with an adventurous spirit,
          eager to launch himself into innovative projects and adapt to
          constantly changing environments, but always learning and embracing
          challenges, you've found the right person! I'm excited to make a real
          impact on projects and support the team's success. 🦄
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
