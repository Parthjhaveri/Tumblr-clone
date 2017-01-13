module.exports = {
// ACTIONS:
  actionTypes: 'front/actions/types',
  actionTest: 'front/actions/actionTest',
  formActions: 'front/actions/formActions',
  postActions: 'front/actions/postActions',
// STORE:
  store: 'front/store',
// REDUCERS:
  rootReducer: 'front/reducers/rootReducer',
  createPostReducer: 'front/reducers/createPostReducer',
  loginFormReducer: 'front/reducers/loginFormReducer',
  postReducer: 'front/reducers/postReducer',
// COMPONENTS:
  Main: 'front/components/Main',
  CreatePost: 'front/components/create-post/CreatePost',
  Login: 'front/components/login/Login',
  Timeline: 'front/components/timeline/Timeline',
// CONTAINERS:
  CreatePostContainer: 'front/container/CreatePostContainer',
  LoginContainer: 'front/container/LoginContainer',
  TimelineContainer: 'front/container/TimelineContainer'
}