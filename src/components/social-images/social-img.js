import React from "react";
import "./social-img.css";

export const SocialImg = ({ image }) => {
  return (
    <div className="social-image-wrap">
      <div className="social-image">{image}</div>
    </div>
  );
};
