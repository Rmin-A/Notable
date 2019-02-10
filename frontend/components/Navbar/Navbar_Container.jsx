import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Navbar from './Navbar';

const mapStateToProps = ({ session, entities: { users } }) => {
  return {

  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);


    // navLink: <Link to="/signup">sign up instead</Link>,
