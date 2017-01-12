import {connect} from 'react-redux';
import CreatePost from 'CreatePost';

const mapStateToProps = state => ({
  title: state.createPostReducer.title,
  postText: state.createPostReducer.postText,
  tags: state.createPostReducer.tags,
  color: state.createPostReducer.color
});

export const CreatePostContainer = connect(mapStateToProps)(CreatePost);
