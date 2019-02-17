import { connect } from 'react-redux';
import { withRouter } from "react-router";

import ActionBar from './ActionBar';

const mapStateToProps = () => {
  return {

  };
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionBar));
