import React, { useContext } from "react";
import "../../views/Home/home.scss";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";
import andre from "../../assets/img/andre2.png";

const Home: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`home-page ${darkMode ? "dark" : ""}`}>
      <img className="andre" src={andre} alt="andre"></img>
      <h1 className="welcome">
        Thank you for being interested in knowing more about me...
      </h1>
    </div>
  );
};

export default Home;
