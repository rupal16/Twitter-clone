import React from "react";
import PropType from "prop-types";

import "./style.css";

const Buttons = (props) => {
  return (
    <div>
      <button className="btn-style">
        <i
          className={`fa ${props.classNameText}`}
          style={{ paddingRight: "7px" }}
        ></i>
        <div style={{ fontWeight: "lighter" }}>{props.text}</div>
      </button>
    </div>
  );
};

Buttons.PropType = {
  classNameText: PropType.string.isRequired,
  text: PropType.string,
};

export default Buttons;
