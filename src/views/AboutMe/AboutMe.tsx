import React, { useContext } from "react";
import "../../views/AboutMe/aboutme.scss";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";

const AboutMe: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`aboutme-page ${darkMode ? "dark" : ""} `}>
      <div className={`about-leftside ${darkMode ? "dark" : ""} `}>
        <img className={`photo ${darkMode ? "dark" : ""} `} src="https://media.licdn.com/dms/image/D4D03AQH_fW02L48Kpw/profile-displayphoto-shrink_800_800/0/1680459127578?e=1691625600&v=beta&t=YFCmmgPSzFQU93Icbu6M5hVDOIYEEboerrKuFcKGf8Q" alt="andre"></img>
        <p className={`about-name ${darkMode ? "dark" : ""} `}>André Costa</p>
        <p className={`about-place ${darkMode ? "dark" : ""} `}>Porto, Portugal</p>
      </div>
      <div className={`about-rightside ${darkMode ? "dark" : ""} `}>
        <h1 className={`about-title ${darkMode ? "dark" : ""} `}>About me...</h1>
        <p className={`about-description ${darkMode ? "dark" : ""} `}>
          My name is André and I am a Portuguese 33 years old guy from Porto. My
          background is about ten years of mechanical engineering and business
          management in different markets and contexts, but my passion is
          software development. A little over a year ago I decided to change my
          career 100% and do a FullStack Web Developer Bootcamp (MERN Stack) at
          Ironhack.<br></br>Since then, I've been chasing the opportunity to be
          valuable in this area and grow as a programmer, accepting all
          challenges. <br></br> I consider myself a problem solver, a team
          player and a creative person. With ten years of work experience, I
          developed a few soft skills such as good communication, a quality that
          I consider fundamental to all jobs. I am a fast learner and I like to
          be challenged, take risks and push myself to the limit. As hobbies, I
          like to play padel, do sim-racing races and travel.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
