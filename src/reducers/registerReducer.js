import * as types from '../actions/actionTypes';

const initialState = {
  registerResponse: null
};

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.RECEIVE_REGISTER_RESPONSE:
      return {
        ...state,
        registerResponse: action.payload
      };

    default:
      return state;
  }
}
