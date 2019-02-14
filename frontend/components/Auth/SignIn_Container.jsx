import { connect } from 'react-redux';
import { withRouter } from "react-router";


import { login } from '../../actions/session_actions';
import Auth from './Auth';

const mapStateToProps = ({ errors: { session } }) => {
  return {
    sessionError: session,
  };
};

const mapDispatchToProps = dispatch => {
  return({
    logIn: (user) => dispatch(login(user)),
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth));
