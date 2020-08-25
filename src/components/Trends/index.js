import React from "react";

import Text from "./text";

import "./style.css";

const Trends = () => {
  return (
    <div className="trends">
      <div className="t-header">
        <p className="t-btn">Trends</p>
        <p className="t-change">Change</p>
      </div>
      <div>
        <Text text="#SportInfoDay"></Text>
        <Text text="#WomenLeaders"></Text>
        <Text text="#UXDesign"></Text>
        <Text text="#UIDesign"></Text>
        <Text text="#SportInfoDay"></Text>
        <Text text="#SportInfoDay"></Text>
        <Text text="#SportInfoDay"></Text>
        <Text text="#SportInfoDay"></Text>
      </div>
    </div>
  );
};

export default Trends;
