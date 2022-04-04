import React from "react";
import "./home-stack.css";

export const Stack = ({ stack }) => {
  let colorObj = {
    HTML: "red",
    CSS: "blue",
    JS: "yellowgreen",
    API: "teal"
  };
  let currentColor = colorObj[stack];

  return (
    <div
      className={"stack home-card-down-space"}
      style={{ color: currentColor }}
    >
      {stack}
    </div>
  );
};
