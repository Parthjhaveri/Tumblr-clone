// actions types
import {CREATE_POST} from 'actionTypes';

// state
let _initialState = {
  title: "",
  text: "",
  tags: "",
  color: 'green'
}

function createPostReducer(state = _initialState, action) {
  let stateCopy = Object.assign({}, state);
  switch(action.type) {
    case "ACTION_TEST":
      stateCopy.color = action.data
      return stateCopy;
    case CREATE_POST:
      stateCopy[action.name] = action.value;
      return stateCopy;
    default:
      return stateCopy;
  }
}

export default createPostReducer;