import { connect } from 'react-redux';
import { withRouter } from "react-router";

import TagBar from './TagBar';

const mapStateToProps = () => {
  return {

  };
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TagBar));
