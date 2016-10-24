import * as types from '../actions/actionTypes'

export const receiveRegisterResponse = (registerResponse) => {
  console.log(registerResponse)
  return {
    type: types.RECEIVE_REGISTER_RESPONSE,
    payload: registerResponse
  }
}

export const submitRegister = (RegisterFormData) => {
  const postBody = {
    user: {
      name: RegisterFormData.Name,
      email: RegisterFormData.Email,
      password: RegisterFormData.Password
    }
  }

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  return (dispatch) => {

    return fetch(`http://ec2-52-206-122-212.compute-1.amazonaws.com/auth`,
      {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(postBody),
        headers: myHeaders
      })
     .then(response => response.json())
     .then(json => {
       dispatch(receiveRegisterResponse(json))
    })
  }
}
