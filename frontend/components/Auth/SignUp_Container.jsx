import { connect } from 'react-redux';
import { withRouter } from "react-router";


import { signup } from '../../actions/session_actions';
import Auth from './Auth';

const mapStateToProps = ({ erros: { session } }) => {
  return {
    sessionError: session,
  };
};

const mapDispatchToProps = dispatch => {
  return({
    logIn: (user) => dispatch(signup(user)),
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth));
