import React from "react";

import TwitterLogo from "./twitterbg.jpg";

import "./style.css";

const TwitterLeftBackground = () => {
  return (
    <div
      style={{
        backgroundImage: "url(" + TwitterLogo + ") ",
      }}
      className="background"
    >
      <div className="background__content">
        <i
          className="fa fa-search"
          aria-hidden="true"
          style={{ paddingRight: "10px" }}
        ></i>
        Follow your interests
      </div>
      <div className="background__content">
        <i
          className="fa fa-users"
          aria-hidden="true"
          style={{ paddingRight: "10px" }}
        ></i>
        Hear what people are talking about
      </div>
      <div className="background__content">
        <i
          className="fa fa-comments-o"
          aria-hidden="true"
          style={{ paddingRight: "10px" }}
        ></i>
        Join the conversation
      </div>
    </div>
  );
};
export default TwitterLeftBackground;
