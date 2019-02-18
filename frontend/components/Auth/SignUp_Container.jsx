import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { signup } from '../../actions/session_actions';
import Auth from './Auth';

const mapStateToProps = ({ errors: { session }, session: { currentUser } }) => {
  return {
    formType: "Sign up",
    sessionError: session,
    currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return({
    handleFormProcess: (user) => dispatch(signup(user)),
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth));
