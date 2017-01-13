import {connect} from 'react-redux';
import Login from 'Login';

const mapStateToProps = state => ({
  login: state.loginFormReducer.login,
  currentUser: state.loginFormReducer.currentUser
});

export const LoginContainer = connect(mapStateToProps)(Login);