import * as types from '../actions/actionTypes';

const initialState = {
  issuesResponse: null
};

export default function counter(state = initialState, action = {}) {
  switch (action.type) {

    case types.RECEIVE_ISSUES_RESPONSE:
      return {
        ...state,
        issuesResponse: action.payload
      }

    default:
      return state;
  }
}
