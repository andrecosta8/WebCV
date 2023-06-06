import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home/Home";
import AboutMe from "../views/AboutMe/AboutMe";
import Education from "../views/Education/Education";
import Experience from "../views/Experience/Experience";

const Body = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/education" element={<Education />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
};

export default Body;
