import {connect} from 'react-redux';
import Timeline from 'Timeline';

const mapStateToProps = state => ({
  currentUser: state.loginFormReducer.currentUser,
  posts: state.postReducer.posts
});

export const TimelineContainer = connect(mapStateToProps)(Timeline);