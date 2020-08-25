import React from "react";
import PropType from "prop-types";

import "./style.css";

const Template = (props) => {
  return (
    <div className="cb-middle">
      <div className="cb-middle-item">
        <div>Tweets</div>
        <div>{props.tweets}</div>
      </div>
      <div className="cb-middle-item">
        <div>Following</div>
        <div>{props.following}</div>
      </div>
      <div className="cb-middle-item">
        <div>Followers</div>
        <div>{props.followers}</div>
      </div>
      <div className="cb-middle-item">
        <div>Favourites</div>
        <div>{props.favs}</div>
      </div>
      <div className="cb-middle-item">
        <div>Lists</div>
        <div>{props.lists}</div>
      </div>
      <div className="cb-middle-item">
        <div>Moments</div>
        <div>{props.moments}</div>
      </div>
    </div>
  );
};

Template.PropType = {
  tweets: PropType.number.isRequired,
  following: PropType.number.isRequired,
  followers: PropType.number.isRequired,
  favs: PropType.number.isRequired,
  lists: PropType.number.isRequired,
  moments: PropType.number.isRequired,
};

export default Template;
