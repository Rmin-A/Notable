import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { logout } from '../../actions/session_actions';
import Main from './Main';

const mapStateToProps = ({ session: { currentUser } }) => {
  return {
    currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(logout()),
  
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Main));
