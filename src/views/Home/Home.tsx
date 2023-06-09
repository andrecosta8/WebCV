import React, { useContext } from "react";
import "../../views/Home/home.scss";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";

const Home: React.FC = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`home-page ${darkMode ? "dark" : ""}`}>
    </div>
  );
};

export default Home;
