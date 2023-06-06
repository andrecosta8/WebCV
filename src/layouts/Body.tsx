import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home/Home";
import AboutMe from "../views/AboutMe/AboutMe";
import Education from "../views/Education/Education";
import Experience from "../views/Experience/Experience";
import Contacts from "../views/Contacts/Contacts";

const Body: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default Body;
