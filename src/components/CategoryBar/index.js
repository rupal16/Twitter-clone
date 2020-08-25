import React from "react";
import { Row, Col } from "react-bootstrap";

import Template from "./template.js";
import ProfilePic from "../ProfilePic";

import "./style.css";

const CategoryBar = () => {
  return (
    <Row className="cb-row">
      <Col lg={3} md={2} sm={1} className=" pro-pic">
        <ProfilePic />
      </Col>
      <Col lg={6} md={8} sm={11} className="cb-col">
        <Template
          tweets="3931"
          following="654"
          followers="387"
          favs="265"
          lists="8"
          moments="0"
        />
      </Col>
      <Col lg={3} md={2} style={{ height: "60px" }} className="cat-right">
        <div className="cat-bar-btn-icon">
          <button className="cat-btn">Follow</button>
          <i className="fa fa-ellipsis-v cat-bar-icon" aria-hidden="true"></i>
        </div>
      </Col>
    </Row>
  );
};

export default CategoryBar;
