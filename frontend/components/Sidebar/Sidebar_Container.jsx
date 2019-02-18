import { connect } from 'react-redux';
import { withRouter } from "react-router";

import SideBar from './SideBar';

const mapStateToProps = ({ session: { currentUser }}) => {
  return {
    currentUser,
  };
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar));
