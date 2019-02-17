import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { logout, login, signup } from '../../actions/session_actions';
import Main from './Main';

const mapStateToProps = ({ session: { currentUser } }) => {
  return {
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logout()),
  signIn: () => dispatch(login()),
  signUp: () => dispatch(signup())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));
