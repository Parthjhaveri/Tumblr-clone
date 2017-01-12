import {combineReducers} from 'redux';
import store from 'store';
import createPostReducer from 'createPostReducer';
import loginFormReducer from 'loginFormReducer';

const rootReducer = combineReducers({
  createPostReducer,
  loginFormReducer
});

export default rootReducer;