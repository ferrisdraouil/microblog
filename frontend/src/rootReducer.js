import {
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  LOAD_ALL_POSTS,
  SHOW_ERR,
  GOT_ONE_POST,
  VOTE
} from './actionTypes';
import uuid from 'uuid/v4';
import _ from 'lodash';

const DEFAULT_STATE = {
  posts: {
    [uuid()]: {
      title: '',
      body: '',
      description: '',
      comments: { [uuid()]: { text: '' } }
    }
  },
  error: false
};

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_POST: {
      let { id, ...newPost } = action.payload;
      newPost.comments = [];
      let copiedPosts = _.cloneDeep(state.posts);
      copiedPosts[id] = newPost;
      return { posts: copiedPosts };
    }
    case LOAD_ALL_POSTS: {
      let allPosts = action.payload;
      return { posts: allPosts };
    }
    case REMOVE_POST: {
      let postId = action.payload;
      let copiedPosts = _.cloneDeep(state.posts);
      delete copiedPosts[postId];

      return { posts: copiedPosts };
    }
    case EDIT_POST: {
      let { postObj } = action.payload;
      let copiedPosts = _.cloneDeep(state.posts);
      let { id, ...rest } = postObj;
      copiedPosts[postObj.id] = rest;
      return { posts: copiedPosts };
    }
    case ADD_COMMENT: {
      let { commentObj, postId } = action.payload;
      let copiedPosts = _.cloneDeep(state.posts);
      copiedPosts[postId].comments.push({
        id: commentObj.id,
        text: commentObj.text
      });
      return { posts: copiedPosts };
    }
    case DELETE_COMMENT: {
      let { commentId, postId } = action.payload;
      let copiedPosts = _.cloneDeep(state.posts);
      let newComments = copiedPosts[postId].comments.filter(
        comment => comment.id !== commentId
      );
      copiedPosts[postId].comments = newComments;
      return { posts: copiedPosts };
    }
    case GOT_ONE_POST: {
      let post = action.payload;
      let copiedPosts = _.cloneDeep(state.posts);
      copiedPosts[post.id] = post;
      return { posts: copiedPosts };
    }
    case VOTE: {
      const { postId, votes } = action;
      let copiedPosts = _.cloneDeep(state.posts);
      copiedPosts[postId].votes = votes;
      return { posts: copiedPosts };
    }

    case SHOW_ERR: {
      return { ...state, error: true };
    }
    default:
      return state;
  }
}

export default rootReducer;
