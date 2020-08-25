import React from "react";
import PropType from "prop-types";

import "./style.css";

const Template = (props) => {
  return (
    <div>
      <p className="copyrt-text">{props.text}</p>
    </div>
  );
};

Template.PropType = {
  text: PropType.string.isRequired,
};

export default Template;
