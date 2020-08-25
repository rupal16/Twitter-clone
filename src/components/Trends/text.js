import React from "react";
import PropType from "prop-types";

const Text = (props) => {
  return <div className="t-text">{props.text}</div>;
};

Text.PropType = {
  text: PropType.string,
};
export default Text;
