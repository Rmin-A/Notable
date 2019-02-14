import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Auth extends Component {

  state = {
    email: null,
    password: null
  }

  handleSubmit = () => {
    return(e) => {
      alert('hi');
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
                "Don't Have an account?" :
                "Already have an account?"
            }
          </p>
          <button
            onClick={ (e) => e.preventDefault() }>
            <Link
              to={`/${
                (this.props.formType === "Sign in") ? "signup" : "signin"
              }`
              }>
               {(this.props.formType === "Sign in") ? "Sign up" : "Sign in"}
            </Link>
          </button>
        </div>
      </div>
    )
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
            placeholder="Email"
            type="email">
          </input>
          <input
            placeholder="Password"
            type="password">
          </input>
          {this.handleFormButton()}
        </form>
      </div>
    );
  }
}

export default Auth;
