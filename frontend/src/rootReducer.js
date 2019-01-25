import {
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT,
  LOAD_ALL_POSTS
} from './actionTypes';
import uuid from 'uuid/v4';

const DEFAULT_STATE = {
  posts: {
    [uuid()]: {
      title: 'the best title',
      body: 'textHURR',
      description: 'thebest',
      comments: { [uuid()]: { text: 'commentText' } }
    }
  }
};

function rootReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_POST: {
      let newPost = action.payload;
      let copiedPosts = JSON.parse(JSON.stringify(state.posts));
      copiedPosts[uuid()] = newPost;
      return { posts: copiedPosts };
    }
    case LOAD_ALL_POSTS: {
      let allPosts = action.payload;
      return { posts: allPosts };
    }
    case REMOVE_POST: {
      let postId = action.payload;
      let copiedPosts = JSON.parse(JSON.stringify(state.posts));
      delete copiedPosts[postId];
      return { posts: copiedPosts };
    }
    case EDIT_POST: {
      let { postId, postObj } = action.payload;
      let copiedPosts = JSON.parse(JSON.stringify(state.posts));
      copiedPosts[postId] = postObj;
      return { posts: copiedPosts };
    }
    case ADD_COMMENT: {
      let { commentObj, postId } = action.payload;
      let copiedPosts = JSON.parse(JSON.stringify(state.posts));
      copiedPosts[postId].comments[uuid()] = { text: commentObj.comment };
      return { posts: copiedPosts };
    }
    case DELETE_COMMENT: {
      let { commentId, postId } = action.payload;
      let copiedPosts = JSON.parse(JSON.stringify(state.posts));
      delete copiedPosts[postId].comments[commentId];
      return { posts: copiedPosts };
    }
    default:
      return state;
  }
}

export default rootReducer;
