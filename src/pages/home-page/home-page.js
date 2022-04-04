import React from "react";
import "./home-page.css";

import { HomeMain } from "../../components/home-main/home-main.js";
import { HomeSection } from "../../components/home-section/home-section.js";
import { HomeCourses } from "../../components/home-courses/home-courses";
import { HomeSlack } from "../../components/home-slack/home-slack.js";
import { HomeSubscribe } from "../../components/home-subscribe/home-subsc";
import { HomeInfo } from "../../components/home-info/home-info.js";
import { Footer } from "../../components/footer/footer";
export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page-wrap">
        <div className="home-page-bottom">
          <HomeMain />
          <HomeSection />
          <HomeCourses />
          <HomeSlack />
          <HomeSubscribe />
          <HomeInfo />
          <Footer />
        </div>
      </div>
    </div>
  );
};
