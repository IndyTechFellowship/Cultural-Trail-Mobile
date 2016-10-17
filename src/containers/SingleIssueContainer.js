import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import SingleIssueScene from '../components/SingleIssueScene';

const mapStateToProps = (state, ownProps) => {
    console.log("Single Issue State");
    console.log(state);
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
};

const SingleIssueContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SingleIssueScene);

export default SingleIssueContainer;