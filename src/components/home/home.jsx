import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Dialogue from "../dialogues/dialogue.jsx";
import Links from "../link/link.jsx";
import "../../App.css";

const Home = () => {
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

  const [currentDialogueIndex, setCurrentDialogueIndex] = useState(0);
  const [dialoguesFinished, setDialoguesFinished] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentDialogueIndex < dialogues.length - 1) {
        setCurrentDialogueIndex((prevIndex) => prevIndex + 1);
      } else {
        setDialoguesFinished(true);
      }
    }, 1000); // Delay in milliseconds between each dialogue

    return () => clearTimeout(timer);
  }, [currentDialogueIndex, dialogues.length]);

  useEffect(() => {
    if (dialoguesFinished || location.pathname !== "/") {
      setShowLinks(true);
    }
  }, [dialoguesFinished, location.pathname]);

  return (
    <>
      <div className="App">
        {!showLinks &&
          dialogues.map((dialogue, index) =>
            index === dialogues.length - 1 ? null : (
              <Dialogue
                key={index}
                text={dialogue}
                isVisible={index === currentDialogueIndex}
              />
            )
          )}
        {showLinks && (
          <div id="pageLinks">
            <Links />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
