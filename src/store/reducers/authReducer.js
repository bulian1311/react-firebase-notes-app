import * as types from '../actions/types';
const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case types.SIGNIN_SUCCESS:
      return { ...state, authError: null };
    case types.SIGNIN_ERROR:
      return { ...state, authError: action.payload.message };
    case types.SIGNUP_SUCCESS:
      return { ...state, authError: null };
    case types.SIGNUP_ERROR:
      return { ...state, authError: action.payload.message };
    case types.SIGNOUT_SUCCESS:
      return { ...state, authError: null };
    case types.SIGNOUT_ERROR:
      return { ...state, authError: action.payload.message };
    case types.AUTH_ERROR_CLEAR:
      return { ...state, authError: null };
    default:
      return state;
  }
};

export default authReducer;
