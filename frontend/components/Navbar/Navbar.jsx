import React
  from 'react';
import { withRouter, Link }
  from 'react-router-dom';

const navbar = (props) => {

  const toggleClickHandler = () => {
    return (e) => {
      const mobileMenu = document.querySelectorAll('.Navbar-items');
      mobileMenu.forEach(
        (nav) => {
          nav.classList.toggle('Navbar-link-toggle-show');
        }
      );
    };
  };

  return(
    <div
      className="Navbar">
      <div
        className="Navbar-header">
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
            onClick={ toggleClickHandler() }>
          </button>
        </div>
      </div>

      <nav
        className="Navbar-items Navbar-items-right">
        <div
          className="Navbar-link">
          <button
            className="Navbar-SignUp">
            <Link
              to="/signup">
              Sign Up
            </Link>
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
            <Link
              to="/signin">
              Sign in
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default withRouter(navbar);
