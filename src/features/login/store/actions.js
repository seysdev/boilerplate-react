import { LOGIN_SUCCESS } from './constants';
const loginSuccess = (response) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      response
    }
  }
}

export {
  loginSuccess
}
