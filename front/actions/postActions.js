import store from 'store';
import {DISPLAY_POSTS} from 'actionTypes';

export function displayPosts(posts) {
  store.dispatch({
    type: DISPLAY_POSTS,
    posts
  })
}