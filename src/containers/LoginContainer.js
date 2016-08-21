import { connect } from 'react-redux'
import { goToRegister, submitLogin } from '../actions/loginActions'
import { Actions } from 'react-native-router-flux';
import Login from '../components/Login'

const mapStateToProps = (state, ownProps) => {
  return {
    showRegister: state.loginReducer.showRegister,
    loginResponse: state.loginReducer.loginResponse
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onShowRegisterButtonClicked: () => {
      Actions.register()
    },

    submitLogin: (loginData) => {
      dispatch(submitLogin(loginData))
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer
