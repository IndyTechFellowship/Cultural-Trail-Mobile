import { connect } from 'react-redux'
import { getIssues} from '../actions/issueActions'
import { Actions } from 'react-native-router-flux';
import IssuesScene from '../components/IssuesScene'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    issuesResponse: state.issuesReducer.issuesResponse,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getIssues: () => {
      console.log('get')
      dispatch(getIssues())
    },

    addNewIssueClicked: () => {
      console.log('new issue clicked');
      Actions.singleIssue();
    }
  }
}

const IssuesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssuesScene)

export default IssuesContainer
