import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/home.jsx";
import CV from "./components/cv/cv.jsx";
import MyProjects from "./components/projects/projects.jsx";
import "./App.css";
import ReturnHome from "./components/home/returnHome.jsx";

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myCv" element={<CV />} />
        <Route path="/myProjects" element={<MyProjects />} />
        <Route path="/home" element={<ReturnHome />} />
      </Routes>
    </Router>
  );
};

export default App;
