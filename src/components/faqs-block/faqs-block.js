import { React, useState } from "react";
import "./faqs-block.css";

import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

export const FaqsBlock = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  const changeOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="faqs-block-wrap">
      <div className="faqs-block" onClick={changeOpen}>
        <div className="faqs-block-text">{question}</div>
        {open ? <BiMinus size={25} /> : <BsPlusLg size={25} />}
      </div>
      {open ? (
        <div className="faqs-answer">
          <div>{answer}</div>
        </div>
      ) : null}
    </div>
  );
};
