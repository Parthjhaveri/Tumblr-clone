import {LOGIN_WITH_USERNAME, SET_USER_INFO} from 'actionTypes';

let _init = {
  login: null,
  currentUser: null
};

function loginFormReducer(state = _init, action) {
  let stateCopy = Object.assign({}, state);
  switch(action.type) {
    case LOGIN_WITH_USERNAME:
      stateCopy[action.name] = action.value;
      return stateCopy;
    case SET_USER_INFO:
      stateCopy.currentUser = action.user;
      return stateCopy;
    default: 
      return stateCopy;
  }
};

export default loginFormReducer;