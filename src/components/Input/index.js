import React from "react";
import { Form, Col } from "react-bootstrap";

import "./style.css";

const Input = (props) => {
  return (
    <div>
      <Form.Group as={Col} style={{ border: "none" }}>
        <Form.Label
          className="label"
          style={{ paddingLeft: "10px", fontSize: "13px" }}
        >
          {props.labelname}
        </Form.Label>
        <br />
        <Form.Control
          size="sm"
          className="input"
          type={props.type}
          name={props.name}
          onChange={props.handleChange}
          style={{
            border: "none",
            backgroundColor: "#e0ebeb",
            borderRadius: "20px",
            height: "39px",
            width: "380px",
          }}
        />
      </Form.Group>
    </div>
  );
};
export default Input;
