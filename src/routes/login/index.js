import React from "react";
import Joi from "@hapi/joi";

import { Link, withRouter } from "react-router-dom";
import { Form, Spinner } from "react-bootstrap";

import { isUserRegistered } from "../../services/userService";

import { loginRequest } from "../../actions";

import Input from "../../components/Input";
import ErrorDisplay from "../../components/errorDisplay";
import TwitterLeftBackground from "../../components/TwitterLeftBackground";

import "./style.css";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      errorContent: "",
      isloading: false,
      error: "",
      isUserRegistered: false,
      formError: false,
      email: "",
      password: "",
    };
  }
  handleValidation = () => {
    const { email, password } = this.state;
    let formError = false;

    const schema = Joi.object({
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ["com", "net"] },
        })
        .required()
        .messages({
          "string.base": `"userName" should be a type of 'text'`,
          "string.empty": `Fields cannot be empty`,
          "string.tlds": `"incorrect domain name`,
          "any.required": `"email" is a required field`,
        }),
      password: Joi.string().min(5).max(10).required().messages({
        "string.empty": `Fields cannot be empty`,
        "any.required": `"password" is a required field`,
        "string.min": `"userName" should have a minimum length of {#5}`,
      }),
    });

    let data = { email, password };
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

  checkUser = async (email) => {
    let formError = false;
    const { password } = this.state;
    const { signIn } = this.props;
    formError = await this.handleValidation();
    if (!formError) {
      try {
        let value = await isUserRegistered(email);
        if (value) {
          await signIn(email, password);
        } else {
          this.setState({
            isError: true,
            errorContent: "You do not have an existing account!",
          });
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

  handleLogin = async (event) => {
    event.preventDefault();
    const { email } = this.state;
    let formError = false;

    this.setState({
      isloading: true,
    });
    formError = await this.handleValidation();
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

  cancelButton = (event) => {
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
    const { email, password, isError } = this.state;

    return (
      <div className="login">
        <div className="login__left">
          <TwitterLeftBackground />
        </div>
        <div className="login__right">
          <div className="login__rightContainer">
            <i
              className="fa fa-twitter login__rightTwitterLogo"
              aria-hidden="true"
            ></i>
            <h3 className="login__rightText">
              See what's happening in the world right now!
            </h3>

            <div className="login__rightForm">
              <Form
                onSubmit={this.handleLogin}
                className="login__rightFormContainer"
              >
                <Input
                  labelname="Email"
                  type="email"
                  name="email"
                  placeholder=" Email"
                  handleChange={this.handleChange}
                  value={email}
                />
                <p className="login__emailAlert">
                  We'll never share your email with anyone else.
                </p>

                <Input
                  labelname="Password"
                  type="password"
                  name="password"
                  placeholder=" Password"
                  handleChange={this.handleChange}
                  value={password}
                />
                <p className="login__passwordAlert">Forgot Password?</p>

                <button
                  type="submit"
                  variant="secondary"
                  value="submit"
                  disabled={this.isloading}
                  className="login__button"
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
                      <span className="login__loadingMsg">Please wait...</span>
                    </div>
                  )}
                  {!this.state.isloading && (
                    <div>
                      <span>Log in</span>
                    </div>
                  )}
                </button>

                <p className="login__forgotPassword">
                  Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
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
    signIn: (email, password) => {
      dispatch(loginRequest(email, password));
    },
  };
};

export default connect(null, mapDispatchToProps)(withRouter(Login));
