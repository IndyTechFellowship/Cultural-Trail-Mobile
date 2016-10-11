import * as types from '../actions/actionTypes'
import { Actions } from 'react-native-router-flux'
import _ from 'lodash'
import storage from 'react-native-simple-store';


export const receiveGetIssuesResponse = (issueResponse) => {
  return {
    type: types.RECEIVE_ISSUES_RESPONSE,
    payload: issueResponse
  }
}

export const getIssues = () => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  storage.get('token').then(token => myHeaders.append('api-token', `Token: ${token}`))
  return (dispatch) => {

    storage.get('token')
    .then(token => myHeaders.append('api-token', `Token: ${token}`))
    .then(() => {
      return fetch(`http://ec2-52-206-122-212.compute-1.amazonaws.com/api/issues`,
        {
          method: 'GET',
          headers: myHeaders
        })
       .then(response => response.json())
       .then(json =>
         dispatch(receiveGetIssuesResponse(json))
       )
    })
   }
};

export const singleIssueClicked = (issue) => {

    return (dispatch) => {
        console.log("issue action: single issue clicked!: " + issue.title);
    }
};
