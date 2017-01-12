import store from 'store';
import {LOGIN_WITH_USERNAME, SET_USER_INFO} from 'actionTypes';

export function loginWithUsername(name, value) {
  store.dispatch({
    type: LOGIN_WITH_USERNAME,
    name,
    value
  })
}

export function setUserInfo(user) {
  store.dispatch({
    type: SET_USER_INFO,
    user
  })
}