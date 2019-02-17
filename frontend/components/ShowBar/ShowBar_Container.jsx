import { connect } from 'react-redux';
import { withRouter } from "react-router";

import ShowBar from './ShowBar';

const mapStateToProps = () => {
  return {

  };
};

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ShowBar));
