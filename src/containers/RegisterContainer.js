import { connect } from 'react-redux'
import { submitRegister } from '../actions/registerActions'
import { Actions } from 'react-native-router-flux';
import Register from '../components/Register'

const mapStateToProps = (state, ownProps) => {
  return {
    showRegister: state.loginReducer.showRegister,
    registerResponse: state.registerReducer.registerResponse
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onShowRegisterButtonClicked: () => {
      Actions.register()
    },

    submitRegister: (registerData) => {
      dispatch(submitRegister(registerData))
    }
  }
}

const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)

export default RegisterContainer
