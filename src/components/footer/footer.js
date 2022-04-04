import React from "react";
import "./footer.css";

import { FooterText } from "../footer-text/footer-text";

export const Footer = () => {
  let textArr = ["Terms", "Cookie Policy", "Privacy Policy", " License"];
  return (
    <div className="footer-wrap">
      <div className="footer-header">© Frontend Mentor 2022 </div>
      <div className="footer-right">
        {textArr.map(text => (
          <FooterText text={text} key={text + 1} />
        ))}
      </div>
    </div>
  );
};
