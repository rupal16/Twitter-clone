import React, { Component } from "react";
import { Modal, Spinner } from "react-bootstrap";
import Picker from "emoji-picker-react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import firebase from "firebase";

import { createTweetRequest } from "../../actions";

class TweetModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetText: "",
      isEmojiClicked: false,
      email: this.props.email,
      image: null,
      url: "",
      isLoading: false,
    };
  }
  handleChange = (event) => {
    const { target } = event;
    const { value, name } = target;
    const fieldObj = this.state[name];
    fieldObj.val = value;
    this.setState({
      [name]: fieldObj,
    });
  }; 
  changeHandler = (event) => {
    this.setState({
      tweetText: event.target.value,
    });
  };

  handleFileChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    if (image) {
      const uploadTask = firebase
        .storage()
        .ref(`images/${image.name}`)
        .put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          this.setState({
            isLoading: true,
          });
        },
        (error) => {
          this.setState({
            isLoading: false,
          });
        },
        async () => {
          this.setState({
            isLoading: false,
          });
          await firebase
            .storage()
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              console.log(url);
              this.setState({ url });
            });
        }
      );
    }
  };

  tweetSendHandler = async () => {
    const { tweetText, url } = this.state;
    await this.props.saveTweetMsg(tweetText, url);
    this.props.onHide();
  };

  render() {
    const { isEmojiClicked } = this.state;
    return (
      <div>
        <Modal
          show={this.props.showTweetModal}
          size="lg"
          centered
          onHide={this.props.onHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>
            <div className="image" style={{ marginRight: "15px" }}></div>

            <Modal.Title id="example-custom-modal-styling-title">
              What's happening?
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <textarea
              id="w3review"
              name="w3review"
              rows="5"
              cols="95"
              value={this.state.tweetText}
              style={{ border: "none" }}
              placeholder="
            Write something...
            "
              onChange={this.changeHandler}
            ></textarea>
            <input
              type="file"
              onChange={this.handleFileChange}
              className="sendFilebtn"
            />
            <button className="tweet-btn" onClick={this.handleUpload}>
              {this.state.isLoading ? (
                <div id="actionInProgressSpinner">
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                </div>
              ) : (
                <p>Upload</p>
              )}
            </button>
          </Modal.Body>
          <Modal.Footer>
            <div className="tweet-icons" style={{ width: "82%" }}>
              <button
                style={{ backgroundColor: "white", border: "none" }}
                onClick={() => {
                  this.setState({
                    isEmojiClicked: true,
                  });
                }}
              >
                <i
                  className="fa fa-smile-o"
                  aria-hidden="true"
                  style={{ marginRight: "10px", fontSize: "20px" }}
                ></i>
              </button>
              {isEmojiClicked && <Picker />}
            </div>

            <button className="tweet-btn" onClick={this.tweetSendHandler}>
              Tweet
            </button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveTweetMsg: (message, url) => {
      dispatch(createTweetRequest(message, url));
    },
  };
};

export default connect(null, mapDispatchToProps)(withRouter(TweetModal));
