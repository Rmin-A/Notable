import { connect }
  from 'react-redux';
import { withRouter }
  from "react-router";

import { signup }
  from '../../actions/session_actions';
import Auth
  from './Auth';

const mapStateToProps = (state) => {
  return {
    formType:
      "Sign up",
    sessionError:
      state.errors.session,
    currentUser:
      state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleFormProcess:
      (user) => dispatch(signup(user)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth));
