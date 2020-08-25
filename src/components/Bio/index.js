import React, { Component } from "react";
import { connect } from "react-redux";

import Template from "./template.js";

import "./style.css";

class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <Template
          userName={this.props.user.displayName}
          tag={this.props.user.userName}
          bio="Web, Design & Rock 'n roll Partner/UI Designer @spade_be Musician in
          @dashboxmusic"
          place="Namur, Belgium"
          link="exibit.be"
          date="Joined June
          2007"
          bday="Born
          the 20th of June 1978"
          nof="73"
          nop="266"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.userProfile };
};

export default connect(mapStateToProps)(Bio);
