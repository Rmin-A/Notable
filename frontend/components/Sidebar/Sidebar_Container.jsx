import { connect } from 'react-redux';
import { withRouter } from "react-router";

import SideBar from './SideBar';

const mapStateToProps = () => {
  return {

  };
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar));
