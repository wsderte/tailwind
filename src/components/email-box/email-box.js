import React from "react";
import "./email-box.css";

export const EmailBox = ({ name }) => {
  return (
    <>
      <div className="email-box">
        <input
          className="email-box-input"
          type="email"
          placeholder="email@gmail.com"
        ></input>
        <div className="email-box-button">{name}</div>
      </div>
    </>
  );
};
