import {combineReducers} from 'redux';
import store from 'store';
import createPostReducer from 'createPostReducer';
import loginFormReducer from 'loginFormReducer';
import postReducer from 'postReducer';

const rootReducer = combineReducers({
  createPostReducer,
  loginFormReducer,
  postReducer
});

export default rootReducer;