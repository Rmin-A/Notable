import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './Greeting';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {

  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);


    // navLink: <Link to="/signup">sign up instead</Link>,
