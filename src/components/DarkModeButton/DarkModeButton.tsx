import React, { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";
import '../DarkModeButton/darkModeButton.scss'

const DarkModeButton: React.FC = () => {
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);

  return (
    <button className={`toggleMode ${darkMode ? "dark" : ""} `} onClick={toggleDarkMode}>
      {darkMode ? <p>Light</p> : <p>Dark</p> }
    </button>
  );
};

export default DarkModeButton;
