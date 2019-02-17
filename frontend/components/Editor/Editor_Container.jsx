import { connect } from 'react-redux';
import { withRouter } from "react-router";

import Editor from './Editor';

const mapStateToProps = () => {
  return {

  };
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor));
