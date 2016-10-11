import { connect } from 'react-redux'
import { getIssues, singleIssueClicked} from '../actions/issueActions'
import { Actions } from 'react-native-router-flux';
import IssuesScene from '../components/IssuesScene'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    issuesResponse: state.issuesReducer.issuesResponse,
    onSingleIssueClicked: state.issuesReducer.singleIssueClicked,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getIssues: () => {
      console.log('get')
      dispatch(getIssues())
    },

    singleIssueClicked: (issue) => {
      console.log('you clicked an issue');
      dispatch(singleIssueClicked(issue))
    }
  }
}

const IssuesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssuesScene)

export default IssuesContainer
