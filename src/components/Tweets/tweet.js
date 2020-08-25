import React from "react";
import PropType from "prop-types";

import Buttons from "../Buttons";

import "./style.css";

const Tweet = (props) => {
  return (
    <div className="tweet-container">
      {props.isRetweet && (
        <div style={{ fontSize: "12px", padding: "10px" }}>
          <i className="fa fa-retweet tweet-icon" aria-hidden="true"></i>
          {props.displayName} has retweeted
        </div>
      )}
      <div className="tweet-header">
        <div className="image"></div>

        <div className="tweet-header-mid">
          <div className="user-details">
            <div style={{ fontSize: "14px", fontWeight: "bold" }}>
              {props.displayName}
            </div>
            <div style={{ fontSize: "13px", padding: "0 8px" }}>
              @{props.userName}
            </div>
            <span className="tweet-timestamp">
              {new Date(props.timestamp?.toDate()).toUTCString()}
            </span>
          </div>
          <div
            style={{ fontSize: "13px", fontWeight: "bold", padding: " 10px 0" }}
          >
            {props.message}
          </div>
        </div>
      </div>
      {!props.isRetweet && props.tweetImg && (
        <div className="tweet-body">
          <img
            src={props.tweetImg}
            style={{
              width: "90%",
              maxHeight: "200px",
              border: "1px solid black",
              borderRadius: "10px",
            }}
            alt="img"
          />
        </div>
      )}

      <div className="tweet-footer" style={{ height: "50px" }}>
        <div
          style={{
            padding: "10px",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Buttons classNameText="fa-comments " />
          <Buttons classNameText="fa-retweet" text={props.retweet} />
          <Buttons classNameText="fa-heart " text={props.likes} />
          <Buttons classNameText="fa-envelope" />
        </div>
      </div>
    </div>
  );
};

Tweet.PropType = {
  displayName: PropType.string.isRequired,
  userName: PropType.string.isRequired,
  date: PropType.string.isRequired,
  message: PropType.string,
  isRetweet: PropType.bool.isRequired,
  retweet: PropType.number.isRequired,
  likes: PropType.number.isRequired,
};

export default Tweet;
