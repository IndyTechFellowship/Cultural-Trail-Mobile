import { connect } from 'react-redux'
import { goToRegister, submitLogin } from '../actions/loginActions'
import { Actions } from 'react-native-router-flux';
import SplashScreen from '../components/SplashScreen'
import { getAuthToken } from '../actions/loginActions'

const mapStateToProps = (state, ownProps) => {
  return {
    authToken: state.loginReducer.authToken,
    authTokenTry: state.loginReducer.authTokenTry
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    moveToLogin: () => {
      Actions.login()
    },

    moveToIssues: () => {
      Actions.issues()
    },

    getAuthToken: () => {
      dispatch(getAuthToken())
    }
  }
}

const SplashContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen)

export default SplashContainer
