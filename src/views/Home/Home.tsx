import React, { useContext } from "react";
import backgroundWhite from "../../assets/img/dev-white.png";
import backgroundDark from "../../assets/img/dev-dark.png";
import "../../views/Home/home.scss";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";

const Home: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div>
      {darkMode ? (
        <img
          className={`background-image ${darkMode ? "dark" : ""} `}
          src={backgroundDark}
          alt="background"
        />
      ) : (
        <img
          className={`background-image ${darkMode ? "dark" : ""} `}
          src={backgroundWhite}
          alt="background"
        />
      )}
    </div>
  );
};

export default Home;
