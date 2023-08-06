import React from "react";
import "./Dialogues.css";

const Dialogue = ({ text, isVisible }) => {
  return (
    <div className={`dialogue ${isVisible ? "visible" : "hidden"}`}>{text}</div>
  );
};

export default Dialogue;
