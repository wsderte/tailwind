import React from "react";
import "./home-subsc.css";
import { EmailBox } from "../email-box/email-box";

export const HomeSubscribe = () => {
  return (
    <div className="home-subsc-wrap">
      <div className="home-subsc-flex">
        <div className="home-subsc-left">
          <div className="home-subsc-header">Subscribe to our newsletter</div>
          <div className="home-subsc-text">
            Stay up-to-date with new challenges, featured solutions, selected
            articles and Frontend Mentor latest news
          </div>
          <div className="home-subsc-agreed">
            <input className="home-subsc-checkbox" type="checkbox"></input>
            <div className="home-subsc-checkbox-text">
              I am happy for Frontend Mentor to contact me by email
            </div>
          </div>
          <div className="subscribe"></div>
          <div className="home-subsc-email-box">
            <input
              className="home-subsc-email-box-input"
              type="email"
              placeholder="email@gmail.com"
            ></input>
            <div className="home-subsc-email-button">{"subscribe"}</div>
          </div>
        </div>
        <div className="home-subsc-right">
          <img
            alt=""
            src="https://www.frontendmentor.io/static/images/illustration-desk.svg"
          ></img>
        </div>
      </div>
    </div>
  );
};
