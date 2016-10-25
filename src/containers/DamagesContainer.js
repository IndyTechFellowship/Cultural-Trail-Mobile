import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Damages from '../components/Damages';

const mapStateToProps = (state, ownProps) => {
    console.log("damages container");
    return {
        damageTypes: state.issueDetailsReducer.damagesResponse.data
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
};

const DamagesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Damages);

export default DamagesContainer;

