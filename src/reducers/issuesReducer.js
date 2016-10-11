import * as types from '../actions/actionTypes';

const initialState = {
  issuesResponse: null,
  singleIssueClicked: null
};

export default function counter(state = initialState, action = {}) {
  switch (action.type) {

    case types.RECEIVE_ISSUES_RESPONSE:
      return {
        ...state,
        issuesResponse: action.payload
      };

    case types.GO_TO_SINGLE_ISSUE_CLICKED:
      return {
          ...state,
          singleIssueClicked: action.payload
      };

    default:
      return state;
  }
}
