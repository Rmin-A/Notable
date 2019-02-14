import { connect } from 'react-redux';
import { withRouter } from "react-router";


import { logout } from '../../actions/session_actions';
import Greeting from './Greeting';

const mapStateToProps = () => {
  return {

  };
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting));
