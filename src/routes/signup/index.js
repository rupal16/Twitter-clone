import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Form, Spinner } from "react-bootstrap";
import DatePicker from "react-datepicker";
import Joi from "@hapi/joi";
import "react-datepicker/dist/react-datepicker.css";

import { createUserRequest } from "../../actions";

import { Authentication } from "../../services/auth";
import { isUserRegistered } from "../../services/userService";
import TwitterLeftBackground from "../../components/TwitterLeftBackground";

import Input from "../../components/Input";
import ErrorDisplay from "../../components/errorDisplay";

import "./style.css";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      errorContent: "",
      isloading: false,
      error: "",
      isUserRegistered: false,
      formError: false,
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
      dob: "",
      userName: "",
    };
  }

  handleValidation = () => {
    const {
      displayName,
      email,
      password,
      confirmPassword,
      dob,
      userName,
    } = this.state;
    let formError = false;

    const schema = Joi.object({
      displayName: Joi.string().required().messages({
        "string.base": `"displayName" should be a type of 'text'`,
        "string.empty": `Fields cannot be empty`,
        "any.required": `"displayName" is a required field`,
      }),
      userName: Joi.string().required().messages({
        "string.base": `"userName" should be a type of 'text'`,
        "string.empty": `Fields cannot be empty`,
        "any.required": `"userName" is a required field`,
      }),
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .required()
        .messages({
          "string.base": `"email" should be a type of 'text'`,
          "string.empty": `Fields cannot be empty`,
          "string.tlds": `"incorrect domain name`,
          "any.required": `"email" is a required field`,
        }),
      password: Joi.string().min(5).max(10).required().messages({
        "string.empty": `Fields cannot be empty`,
        "any.required": `"password" is a required field`,
        "string.min": `"userName" should have a minimum length of {#5}`,
      }),
      confirmPassword: Joi.ref("password"),
      dob: Joi.date().required().messages({
        "any.required": `"dob" is a required field`,
      }),
    });

    let data = { displayName, email, password, confirmPassword, dob, userName };
    let res = schema.validate(data);
    if (res.error) {
      formError = true;
      this.setState({
        isError: true,
        errorContent: res.error.message,
      });
    }
    return formError;
  };

  checkUser = async () => {
    const { email, password, displayName, dob, userName } = this.state;
    const formError = this.handleValidation();
    if (!formError) {
      try {
        let value = await isUserRegistered(email);
        if (value) {
          this.setState({
            isError: true,
            errorContent: "You already have an existing account!",
          });
        } else {
          await Authentication(email, password);
          await this.props.saveUser(displayName, userName, email, dob);
        }
      } catch (err) {
        this.setState({
          isError: true,
          errorContent:
            "Your request cannot be processed at the moment. Please try again later",
        });
      }
    }
  };

  handleSignup = async (event) => {
    event.preventDefault();
    const { email } = this.state;
    this.setState({
      isloading: true,
    });
    const formError = this.handleValidation();
    if (!formError) {
      await this.checkUser(email);
      this.setState({
        isloading: false,
      });
    } else {
      this.setState({
        isloading: false,
      });
    }
  };

  cancelButton = () => {
    this.setState({
      isError: false,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const {
      email,
      password,
      isError,
      displayName,
      confirmPassword,
      dob,
      userName,
    } = this.state;
    return (
      <div className="signup">
        <div className="signup__left">
          <TwitterLeftBackground />
        </div>
        <div className="signup__right">
          <div className="signup__rightContainer">
            <i
              className="fa fa-twitter signup__rightTwitterLogo"
              aria-hidden="true"
            ></i>
            <h3 className="signup__rightText">
              See what's happening in the world right now!
            </h3>
            <div className="signup__rightForm">
              <Form onSubmit={this.handleSignup} className="signup__rightForm">
                <Input
                  labelname="Name"
                  type="text"
                  name="displayName"
                  placeholder=" Enter your name"
                  handleChange={this.handleChange}
                  value={displayName}
                />
                <Input
                  labelname="userName"
                  type="text"
                  name="userName"
                  placeholder=" Enter your user name"
                  handleChange={this.handleChange}
                  value={userName}
                />
                <Input
                  labelname="Email"
                  type="email"
                  name="email"
                  placeholder=" Email"
                  handleChange={this.handleChange}
                  value={email}
                />
                <Input
                  labelname="Password"
                  type="password"
                  name="password"
                  placeholder=" Password"
                  handleChange={this.handleChange}
                  value={password}
                />
                <Input
                  labelname="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  placeholder=" Re-type password"
                  handleChange={this.handleChange}
                  value={confirmPassword}
                />
                <p className="signup__dobField">Date of Birth</p>
                <DatePicker
                  selected={dob}
                  className="signup__datepicker"
                  onChange={(dateVal) => {
                    this.setState({
                      dob: dateVal,
                    });
                  }}
                />
                <button
                  type="submit"
                  variant="secondary"
                  value="submit"
                  disabled={this.isloading}
                  className="signup__button"
                >
                  {this.state.isloading && (
                    <div id="actionInProgressSpinner">
                      <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      <span className="signup__loadingMsg">Please wait...</span>
                    </div>
                  )}
                  {!this.state.isloading && (
                    <div>
                      <span>Log in</span>
                    </div>
                  )}
                </button>

                <br />
                <div>
                  <p className="signup__alertMsg">
                    Already have an account? <Link to="/login">Log in</Link>
                  </p>
                </div>
              </Form>

              {isError && (
                <ErrorDisplay
                  showError={this.state.isError}
                  errorContent={this.state.errorContent}
                  onClick={this.cancelButton}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveUser: (displayName, userName, email, dob) => {
      dispatch(createUserRequest(displayName, userName, email, dob));
    },
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Signup));
