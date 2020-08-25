import React from "react";
import PropType from "prop-types";

import "./style.css";

const Template = (props) => {
  return (
    <div className="bio-container" style={{ position: "sticky", top: "200px" }}>
      <div className="name-tag">
        <p className="user-name">{props.userName}</p>
        <p className="tag">@{props.tag}</p>
      </div>

      <div className="bio">
        <p>{props.bio}</p>
      </div>
      <div className="info">
        <p className="info-item ">
          <i className="fa fa-map-marker bio-icon" aria-hidden="true"></i>
          {props.place}
        </p>
        <p className="info-item">
          <i className="fa fa-link bio-icon" aria-hidden="true"></i>
          {props.link}
        </p>
        <p className="info-item">
          <i className="fa fa-clock-o bio-icon" aria-hidden="true"></i>
          {props.date}
        </p>
        <p className="info-item">
          <i className="fa fa-birthday-cake bio-icon" aria-hidden="true"></i>
          {props.bday}
        </p>
      </div>
      <div className="followers">
        <p className="followers-header">
          <i className="fa fa-user bio-icon" aria-hidden="true"></i>
          {props.nof} followers that you know
        </p>
        <div className="image-container">
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
        </div>
        <div className="image-container">
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
        </div>
      </div>
      <div className="media">
        <p className="media-header">
          <i className="fa fa-picture-o bio-icon" aria-hidden="true"></i>
          {props.nop} Photos and videos
        </p>
        <div className="image-sq-container">
          <div className="image-sq"></div>
          <div className="image-sq"></div>
          <div className="image-sq"></div>
        </div>
        <div className="image-sq-container">
          <div className="image-sq"></div>
          <div className="image-sq"></div>
          <div className="image-sq"></div>
        </div>
      </div>
    </div>
  );
};

Template.PropType = {
  userName: PropType.string.isRequired,
  tag: PropType.string.isRequired,
  bio: PropType.string.isRequired,
  place: PropType.string.isRequired,
  link: PropType.string.isRequired,
  date: PropType.string.isRequired,
  bday: PropType.string.isRequired,
  nof: PropType.number.isRequired,
  nop: PropType.number.isRequired,
};

export default Template;
