import { connect } from 'react-redux'
import { goToRegister, submitLogin, getAuthToken } from '../actions/loginActions'
import { Actions } from 'react-native-router-flux';
import CulturalTrail from '../components/CulturalTrail'

const mapStateToProps = (state, ownProps) => {
  return {
    authToken: state.loginReducer.authToken
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAuthToken: () => {
      dispatch(getAuthToken())
    }
  }
}

const CulturalTrailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CulturalTrail)

export default CulturalTrailContainer
