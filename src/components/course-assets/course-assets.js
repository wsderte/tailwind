import React from "react";
import "./course-assets.css";

export const CourseAssets = ({ text, icon, color }) => {
  if (!color) {
    color = "rgb(126, 200, 56)";
  }

  return (
    <div className="assets-flex">
      <div className="assets-icon" style={{ color: color }}>
        {icon}
      </div>
      <div className="assets-text">{text}</div>
    </div>
  );
};
