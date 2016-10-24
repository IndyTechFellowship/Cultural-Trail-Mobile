import * as types from '../actions/actionTypes';
import { Actions } from 'react-native-router-flux';
import storage from 'react-native-simple-store';


export const receiveGetDamagesResponse = (damagesResponse) => {
    return {
        type: types.RECEIVE_DAMAGES_RESPONSE,
        payload: damagesResponse
    }
};

export const getDamages = () => {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    storage.get('token').then(token => headers.append('api-token', `Token: ${token}`));
    return (dispatch) => {
        storage.get('token')
            .then(token => headers.append('api-token', `Token: ${token}`))
            .then(() => {
                return fetch(`http://ec2-52-206-122-212.compute-1.amazonaws.com/api/damages`,
                    {
                        method: 'GET',
                        headers: headers
                    })
                    .then(response => response.json())
                    .then(json =>
                        dispatch(receiveGetDamagesResponse(json))
                    )
            })
    }
};