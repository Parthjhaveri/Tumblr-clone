import {combineReducers} from 'redux';
import store from 'store';
import createPostReducer from 'createPostReducer';

const rootReducer = combineReducers({
  createPostReducer
});

export default rootReducer;