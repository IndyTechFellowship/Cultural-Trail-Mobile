import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import IssueDetailsEdit from '../components/IssueDetailsEdit';

const mapStateToProps = (state, ownProps) => {
    console.log("Single Issue State");
    console.log(state);
    return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {};
};

const IssueDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(IssueDetailsEdit);

export default IssueDetailsContainer;