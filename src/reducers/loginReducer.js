import * as types from '../actions/actionTypes';

const initialState = {
  showRegister: false,
  loginResponse: null
};

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
    case types.GO_TO_REGISTER_BUTTON_CLICKED:
      return {
        ...state,
        showRegister: true
      };

    case types.RECEIVE_LOGIN_RESPONSE:
      return {
        ...state,
        loginResponse: action.payload
      }

    default:
      return state;
  }
}
