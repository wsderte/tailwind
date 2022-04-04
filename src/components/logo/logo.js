import React from "react";
import { BiWind } from "react-icons/bi";
import "./logo.css";

export const Logo = ({ name }) => {
  return (
    <div className="logo">
      <div className="logo-name">
        <BiWind size={25} className="logo_icon" />
        {name}
      </div>
    </div>
  );
};
