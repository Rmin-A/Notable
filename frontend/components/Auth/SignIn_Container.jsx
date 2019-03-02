import { connect }
  from 'react-redux';
import { withRouter }
  from "react-router";

import { login }
  from '../../actions/session_actions';
import Auth
  from './Auth';

const mapStateToProps = (state) => {
  return {
    formType:
      "Sign in",
    sessionError:
      state.errors.session,
    currentUser:
      state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFormProcess:
      (user) => dispatch(login(user)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth));
