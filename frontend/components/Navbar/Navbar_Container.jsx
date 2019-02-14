import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../../actions/session_actions';
import Navbar from './Navbar';

const mapStateToProps = ({ session, entities: { users }, errors }) => {
  return {
    signInNavLink: <Link to="/signin">Sign in</Link>,
    signUpNavLink: <Link to="/signup">Sign Up</Link>,
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
