import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Dialogue from "../dialogues/dialogue.jsx";
import "../../App.css";
import './home.css';

const Home = () => {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [dialoguesFinished, setDialoguesFinished] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);

const Navigate= useNavigate();

  useEffect(() => {
    const loadBackground = async () => {
      try {
        await new Promise((resolve, reject) => {
          const backgroundImg = new Image();
          backgroundImg.src = require("../../images/background.jpg").default;

          backgroundImg.onload = () => {
            setBackgroundLoaded(true);
            resolve();
          };

          backgroundImg.onerror = () => {
            setBackgroundLoaded(false);
            reject();
          };
        });
      } catch (error) {
        console.error("Error loading background image:", error);
      }
    };

    loadBackground();
  }, []);

    const dialogues = [
      "Welcome To My Profile",
      "My Name is Gowseny D'Souza",
      "I would like to take you on a small journey!",
      "Do you want to get to know me?",
      "I am outgoing and patient.",
      "My key skills are:",
      "My smile",
      "Attention to Detail",
      "Problem Solving",
      "Hunger for Future inventions",
      "What I want to do with my future?",
      "I want to work in a company that takes AI to new levels.",
      "I want to be part of the Bigger Picture.",
      "",
    ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentDialogueIndex < dialogues.length - 1) {
        setCurrentDialogueIndex((prevIndex) => prevIndex + 1);
      } else {
        setDialoguesFinished(true);
        Navigate('/home');
      }
    }, 1500);

    return () => clearTimeout(timer);
  }, [currentDialogueIndex, dialogues.length]);

  const location = useLocation();

useEffect(() => {
  if (dialoguesFinished || location.pathname !== "/") {
    setShowLinks(true);

  }
}, [dialoguesFinished, location.pathname]);


return (
  <div className="App">
    <div className="dialogue-container">
      {dialogues.map((dialogue, index) => (
        <Dialogue
          key={index}
          text={dialogue}
          isVisible={index === currentDialogueIndex}
        />
      ))}
    </div>
 
  </div>
 );
};

export default Home;
