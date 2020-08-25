import React from "react";
import { ListGroup } from "react-bootstrap";

import List from "./list";

import "./style.css";

const Suggestions = () => {
  return (
    <div className="suggestions">
      <div className="s-header">
        <h3 className="h3">Who to follow</h3>
        <p className="li">
          <i className="fa fa-circle pointer" aria-hidden="true"></i>Refresh
        </p>
        <p className="li">
          <i className="fa fa-circle pointer" aria-hidden="true"></i>View All
        </p>
      </div>
      <div>
        <ListGroup variant="flush">
          <List name="Spade" userName="@spade" />
          <List name="Spade" userName="@spade" />
          <List name="Spade" userName="@spade" />
        </ListGroup>
        <div
          style={{
            padding: "15px",
            color: "#2ab8db",
            fontSize: "13px",
            fontWeight: "lighter",
          }}
        >
          <i className="fa fa-users" aria-hidden="true"></i>Find friends
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
