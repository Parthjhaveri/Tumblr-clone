import {DISPLAY_POSTS} from 'actionTypes';

let _init = {
  posts: null
};

function postReducer(state = _init, action) {
  let stateCopy = Object.assign({}, state);
  switch(action.type) {
    case DISPLAY_POSTS:
      stateCopy.posts = action.posts;
      return stateCopy;
    default:
      return stateCopy;
  }
};

export default postReducer;