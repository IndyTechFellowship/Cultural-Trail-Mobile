import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { getDamages, selectIssueType } from '../actions/issueDetailsActions';
import IssueDetailsEdit from '../components/IssueDetailsEdit';

const mapStateToProps = (state, ownProps) => {
    console.log("Single Issue State");
    console.log(state);
    return {
        damagesResponse: state.issueDetailsReducer.damagesResponse
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getDamages: () => {
            console.log('get damages');
            dispatch(getDamages());
        },
        onSelectIssueType: () => {
            Actions.damages()
        }
    };
};

const IssueDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(IssueDetailsEdit);

export default IssueDetailsContainer;