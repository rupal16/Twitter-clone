import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";

import Header from "./components/Header";
import Banner from "./components/Banner";
import CategoryBar from "./components/CategoryBar";
import Bio from "./components/Bio";
import Tweets from "./components/Tweets";
import Suggestions from "./components/Suggestions";
import Trends from "./components/Trends";
import Copyrights from "./components/Copyrights";

import { fetchAllPostsRequest, fetchUserRequest } from "./actions";

import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  constructor(props) {
    super(props);
    this.posts = [];
  }

  componentDidMount = () => {
    this.props.getPosts();
    this.props.getUser();
  };

  state = {
    post: this.props.posts,
    user: this.props.user,
  };

  render() {
    return (
      <div className="dashboard">
        <Row>
          <Col xs={12}>
            <Header />
          </Col>
        </Row>
        <div className="dashboard__layout">
          <Row>
            <Col xs={12} className="dashboard__banner">
              <Banner />
            </Col>
          </Row>

          <Row className="dashboard__categoryBar">
            <Container className="dashboard__categoryBarContainer">
              <Col xs={12}>
                <CategoryBar />
              </Col>
            </Container>
          </Row>
          <Container className="dashboard__lowerLayoutContainer">
            <Row>
              <Col lg={3}>
                <Bio />
              </Col>
              <Col
                lg={6}
                sm={12}
                md={8}
                className="dashboard__lowerLayoutContainer"
              >
                <Row>
                  <Col xs={12}>
                    <Tweets />
                  </Col>
                </Row>
              </Col>
              <Col lg={3} md={4} className="dashboard__lowerLayoutContainer">
                <div className="dashboard__rightLayout">
                  <Row>
                    <Col lg={12}>
                      <Suggestions />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <Trends />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                      <Copyrights />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.userTweet.posts,
    user: state.userProfile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => {
      dispatch(fetchAllPostsRequest());
    },
    getUser: () => {
      dispatch(fetchUserRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
