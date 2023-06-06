import React from "react";
import "../../components/Navbar/navbar.scss";
import { useNavigate } from "react-router-dom";
import DarkModeButton from "../DarkModeButton/DarkModeButton";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-container">
      <div className="navbar-leftside">LEFT</div>
      <div className="navbar-middle">
        <p className="navbar-item" onClick={() => navigate("/")}>Home</p>
        <p className="navbar-item" onClick={() => navigate("/about")}>About me</p>
        <p className="navbar-item" onClick={() => navigate("/education")}>Education</p>
        <p className="navbar-item" onClick={() => navigate("/experience")}>Experience</p>
        <p className="navbar-item" onClick={() => navigate("/contacts")}>Contacts</p>
      </div>
      <div className="navbar-rightside">
        <DarkModeButton />
      </div>
    </div>
  );
};

export default Navbar;
