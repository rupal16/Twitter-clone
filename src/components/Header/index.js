import React, { Component } from "react";
import {
  Navbar,
  FormControl,
  Container,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";

import TweetModal from "../TweetModal";
import Buttons from "../Buttons";

import { signOut } from "../../services/auth";

import "./style.css";
import { withRouter } from "react-router";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTweet: false,
    };
  }

  signOutHandler = async () => {
    await signOut();
    this.props.history.push("./login");
  };

  cancelButton = (event) => {
    this.setState({
      showTweet: false,
    });
  };
  render() {
    return (
      <Navbar collapseOnSelect fixed="top" className="navbar" expand="lg">
        <Container>
          <div className="collapse-container">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <div className="header-left">
                <Buttons
                  text="Home"
                  classNameText="fa-home"
                  btnClassText="home-btn"
                />
                <Buttons
                  text="Notifications"
                  classNameText="fa-bell"
                  btnClassText="notification-btn"
                />
                <Buttons
                  text="Messages"
                  classNameText="fa-envelope"
                  btnClassText="msg-btn"
                />
              </div>
            </Navbar.Collapse>
          </div>
          <div className="header-mid">
            <i className="fa fa-twitter bird" aria-hidden="true"></i>
          </div>
          <div className="header-right">
            <FormControl
              type="text"
              placeholder="Search on twitter"
              className="search-bar"
            />
            <i className="fa fa-search search-icon" aria-hidden="true"></i>

            <OverlayTrigger
              trigger="click"
              // key={bottom}
              placement="bottom"
              overlay={
                <Popover id={`popover-positioned-bottom`}>
                  <Popover.Content onClick={this.signOutHandler}>
                    <strong>Sign Out</strong>
                  </Popover.Content>
                </Popover>
              }
            >
              <button
                className="fa fa-user-circle-o user"
                aria-hidden="true"
                style={{ backgroundColor: "white", border: "none" }}
              ></button>
            </OverlayTrigger>

            <button
              className="tweet-btn"
              onClick={() => {
                this.setState({
                  showTweet: true,
                });
              }}
            >
              Tweet
            </button>
            {this.state.showTweet && (
              <TweetModal
                showTweetModal={this.state.showTweet}
                onHide={() => {
                  this.setState({
                    showTweet: false,
                  });
                }}
              />
            )}
          </div>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(Header);
