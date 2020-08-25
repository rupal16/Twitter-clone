import React from "react";

import Tweet from "./tweet";
import "./style.css";
import { connect } from "react-redux";

const Tweets = ({ post }) => {
  return (
    <div className="tweets">
      <div className="header-bar">
        <p className="tw-btn">Tweets</p>
        <p className="tr-btn">Tweets and Replies</p>
        <p className="tm-btn">Medias</p>
      </div>
      <div className="rt-container">
        {post.map((post, key) => (
          <Tweet
            key={key}
            displayName={post.displayName}
            userName={post.userName}
            date={post.date}
            message={post.message}
            retweet={post.retweet}
            likes={post.likes}
            isRetweet={post.isRetweet}
            tweetImg={post.tweetImg}
            timestamp={post.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    post: state.userTweet.posts,
  };
};

export default connect(mapStateToProps, null)(Tweets);
