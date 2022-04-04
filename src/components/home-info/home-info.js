import React from "react";
import "./home-info.css";
import { BlockLinks } from "../block-links/block-links";
import { SocialImg } from "../social-images/social-img";

import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";

export const HomeInfo = () => {
  const linkArray = [
      {
        header: "Explore",
        links: [
          "Challenges",
          "Solutions",
          "Resources",
          "Unlock pro",
          "Hire Developers"
        ]
      },
      {
        header: "Community",
        links: ["Contact Us", "Slack", "FAQs", "Guidelines", "Blog"]
      }
    ],
    images = [
      <BsTwitter size={30} />,
      <GrLinkedinOption size={30} />,
      <GrFacebookOption size={30} />
    ];

  return (
    <div className="home-info-wrap">
      <div className="home-info-flex">
        <div className="home-info-left">
          <div className="home-info-left-header">Frontend Mentor</div>
          <div className="home-info-left-text">
            Gain real experience of building websites and providing code
            reviews. Build your portfolio and help others achieve their goals.
          </div>
        </div>
        {linkArray.map(link => (
          <BlockLinks
            header={link.header}
            links={link.links}
            key={link.header + "1"}
          />
        ))}
        <div className="home-info-right">
          {images.map((img, l) => (
            <SocialImg image={img} key={l + "w"} />
          ))}
        </div>
      </div>
    </div>
  );
};
