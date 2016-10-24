import * as types from '../actions/actionTypes';

const initialState = {
    damagesResponse: null
};

export default function counter(state = initialState, action = {}) {
    switch (action.type) {

        case types.RECEIVE_DAMAGES_RESPONSE:
            return {
                ...state,
                damagesResponse: action.payload
            };

        default:
            return state;
    }
}