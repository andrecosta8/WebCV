import React, { useContext, useEffect, useState } from "react";
import "../../components/Navbar/navbar.scss";
import { useNavigate } from "react-router-dom";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";
import webCV from "../../assets/img/WebCV.png";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    toggleMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`navbar-container ${darkMode ? "dark" : ""}`}>
        <div className="navbar-leftside">
          <img
            className={`webCV ${darkMode ? "dark" : ""}`}
            src={webCV}
            alt="Web CV"
          />
        </div>
        <div className="navbar-middle">
          <p className="navbar-item" onClick={() => navigate("/")}>
            Home
          </p>
          <p className="navbar-item" onClick={() => navigate("/about")}>
            About me
          </p>
          <p className="navbar-item" onClick={() => navigate("/education")}>
            Education
          </p>
          <p className="navbar-item" onClick={() => navigate("/experience")}>
            Experience
          </p>
          <p className="navbar-item" onClick={() => navigate("/contacts")}>
            Contacts
          </p>
        </div>
        <div className="navbar-rightside">
          <DarkModeButton />
        </div>
      </div>

      <div className={`navbar-container-mobile ${darkMode ? "dark" : ""}`}>
        <button className="mobile-menu-button" onClick={toggleMenu}>
          ...
        </button>
        {isOpen && (
          <ul>
            <p className="navbar-item" onClick={() => navigate("/")}>
              Home
            </p>
            <p className="navbar-item" onClick={() => navigate("/about")}>
              About me
            </p>
            <p className="navbar-item" onClick={() => navigate("/education")}>
              Education
            </p>
            <p className="navbar-item" onClick={() => navigate("/experience")}>
              Experience
            </p>
            <p className="navbar-item" onClick={() => navigate("/contacts")}>
              Contacts
            </p>
          </ul>
        )}
        <DarkModeButton />
      </div>
    </>
  );
};

export default Navbar;
