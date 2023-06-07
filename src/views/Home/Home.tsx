import React, { useContext } from "react";
import backgroundLight from "../../assets/img/dev-light.png";
import backgroundDark from "../../assets/img/dev-dark.png";
import "../../views/Home/home.scss";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";

const Home: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className="home-page">
        <img
          className={`background-image ${darkMode ? "dark" : "light"} `}
          src={darkMode? backgroundDark : backgroundLight}
          alt="background"
        />
    </div>
  );
};

export default Home;
