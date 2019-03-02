import React, { Component }
  from 'react';
import { Link }
  from 'react-router-dom';

class Auth extends Component {

  state = {
    username: null,
    password: null
  }

  handleSubmit = () => {
    return(e) => {
      e.preventDefault();
      Object.freeze(this.state);
      this.props.handleFormProcess(this.state);
    }
  }

  handleFormButton = () => {
    return(
      <div
        className="Auth-Submit-Buttons">
        <div
          className="Auth-Submit-button">
          <button
            className="Auth-Submit">
            {this.props.formType}
          </button>
        </div>
        <div
          className="Auth-Submit-Link">
          <p>
            {
              (this.props.formType === "Sign in") ?
                "Don't Have an account?"
              :
                "Already have an account?"
            }
          </p>
          <button
            onClick={ (e) => e.preventDefault() }>
            <Link
              to={
                `/${(this.props.formType === "Sign in") ?
                  "signup"
                :
                  "signin"}`
              }>
              {
                (this.props.formType === "Sign in") ?
                  "Sign up"
                :
                  "Sign in"
              }
            </Link>
          </button>
        </div>
      </div>
    )
  }

  handleStateUpdate = (key) => {
    return (e) => {
      let newState = Object.assign({}, this.state);
      newState[key] = e.currentTarget.value;
      this.setState(newState);
    }
  }

  render() {
    return(
      <div
        className="Auth-Page">
        <form
          className="Auth-Form"
          onSubmit={ this.handleSubmit() }>
          <div
            className="Auth-Form-Header">
            <img
              src={window.staticImages.logo}>
            </img>
            <p>
              Notable
            </p>
          </div>
          <input
            placeholder="username"
            onChange={this.handleStateUpdate("username")}>
          </input>
          <input
            placeholder="Password"
            type="password"
            onChange={this.handleStateUpdate("password")}>
          </input>
          {this.handleFormButton()}
        </form>
      </div>
    );
  }
}

export default Auth;
