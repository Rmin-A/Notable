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
          className="Auth-Submit-Button">
          <button>
            {this.props.formType}
          </button>
        </div>
        <div
          className="Auth-Submit-link">
          <button
            onClick={ (e) => e.preventDefault() }>
            {
              (this.props.formType === "Sign in") ?
                "Don't Have an account? click " :
                "Already have an account? click "
            }
            <Link
              to={`/${
                (this.props.formType === "Sign in") ? "signup" : "signin"
              }`
              }>
               here.
            </Link>
          </button>
        </div>
      </div>
    )
  }

  render() {
    return(
      <div
        className="Auth">
        <form
          className="Auth-Form"
          onSubmit={ this.handleSubmit() }>
          <input></input>
          <input></input>
          {this.handleFormButton()}
        </form>
      </div>
    );
  }
}

export default Auth;
