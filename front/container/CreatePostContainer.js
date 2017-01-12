import {connect} from 'react-redux';
import CreatePost from 'CreatePost';

const mapStateToProps = state => ({
  title: state.createPostReducer.title,
  text: state.createPostReducer.text,
  tags: state.createPostReducer.tags,
  username: state.loginFormReducer.currentUser ? state.loginFormReducer.currentUser[0].username : state.loginFormReducer.currentUser,
  color: state.createPostReducer.color
});

export const CreatePostContainer = connect(mapStateToProps)(CreatePost);
