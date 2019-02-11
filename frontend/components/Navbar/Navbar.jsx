import React from 'react';
import { withRouter } from 'react-router-dom';

const navbar = (props) => {

  const toggleClickHandler = () => {
    return (e) => {
      const mobileMenu = document.querySelectorAll('.Navbar-items');
      mobileMenu.forEach( (nav) => {
        nav.id = 'Navbar-link-toggle-show';
      });
    };
  };

  return(
    <div
      className="Navbar"
    >
      <div className="Navbar-header">
        <div
          className="Navbar-link Navbar-link-logo">
          <img
           src={ window.staticImages.logo }>
          </img>
        </div>
        <div
          className="Navbar-link Navbar-link-toggle">
          <button
            className="Hamburgermenu"
            onClick={toggleClickHandler()}>
          </button>
        </div>
      </div>

      <nav
        className="Navbar-items">
        <div
          className="Navbar-link">
          <button>
            Plans
          </button>
        </div>
        <div
          className="Navbar-link">
          <button>
            Featurs
          </button>

        </div>
        <div
          className="Navbar-link">
          <button>
            About
          </button>

        </div>
      </nav>

      <nav
        className="Navbar-items Navbar-items-right">
        <div
          className="Navbar-link">
          <button
            className="Navbar-SignUp">
            Sign Up
          </button>
        </div>
        <div
          className="Navbar-link">
          <p>
            or
          </p>
        </div>
        <div
          className="Navbar-link">
          <button
            className="Navbar-LogIn">
            Log in
          </button>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(navbar);
