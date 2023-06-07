import React, { useContext } from "react";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";

const DarkModeButton: React.FC = () => {
  const { toggleDarkMode } = useContext(DarkModeContext);
  return (
    <button className="darkMode-button" onClick={toggleDarkMode}>
      Dark Mode
    </button>
  );
};

export default DarkModeButton;
