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
  console.log('api')
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  //myHeaders.append('api-token', 'Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo4fQ.4tCa3NnBBkvUTVS25Va89Q1ftXueFDtOe7pbgOCYzQU')
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
}
