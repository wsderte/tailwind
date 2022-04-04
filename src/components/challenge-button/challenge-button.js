import React from "react";
import "./challenge-button.css";

export const ChallengeButton = ({ text, icon }) => {
  return (
    <div className="challenge-but-wrap">
      <div className="challenge-but-text">
        {text} {icon}
      </div>
    </div>
  );
};
