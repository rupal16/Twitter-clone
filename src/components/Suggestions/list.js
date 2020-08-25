import React from "react";
import { ListGroup } from "react-bootstrap";
import PropType from "prop-types";

import "./style.css";

const List = (props) => {
  return (
    <ListGroup.Item className="list-item-container">
      <div className="list-item">
        <div className="image"></div>
        <div className="name-btn">
          <div className="name-det">
            <p className="s-name">{props.name}</p>
            <p className="s-userName">{props.userName}</p>
          </div>
          <button className="follow-btn">Follow</button>
        </div>
      </div>
      <div>
        <i className="fa fa-close close"></i>
      </div>
    </ListGroup.Item>
  );
};

List.PropType = {
  name: PropType.string.isRequired,
  userName: PropType.string.isRequired,
};

export default List;
