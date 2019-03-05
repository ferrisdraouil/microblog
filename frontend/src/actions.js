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
import axios from 'axios';

const POSTS_URL = 'http://localhost:5000/api/posts';

export function showErr(msg) {
  return { type: SHOW_ERR, msg };
}

export function getAllPosts() {
  return async function(dispatch) {
    try {
      const res = await axios.get(POSTS_URL);
      const posts = res.data;

      const postsObj = posts.reduce((accumulator, post) => {
        const { id, ...rest } = post;
        accumulator[post.id] = rest;
        return accumulator;
      }, {});
      dispatch(gotAllPosts(postsObj));
    } catch (error) {
      const errorMessage = error.response.data;
      dispatch(showErr(errorMessage));
    }
  };
}

function gotAllPosts(posts) {
  return { type: LOAD_ALL_POSTS, payload: posts };
}

export function addNewPost(postObj) {
  return async function(dispatch) {
    try {
      let { body, description, title } = postObj;
      const res = await axios.post(POSTS_URL, { title, body, description });
      dispatch(addPost(res.data));
    } catch (error) {
      const errorMessage = error.response.data;
      dispatch(showErr(errorMessage));
    }
  };
}

function addPost(postObj) {
  return {
    type: ADD_POST,
    payload: postObj
  };
}

export function deletePost(postId) {
  return async function(dispatch) {
    try {
      await axios.delete(`${POSTS_URL}/${postId}`);
      dispatch(removePost(postId));
    } catch (error) {
      const errorMessage = error.response.data;
      dispatch(showErr(errorMessage));
    }
  };
}
function removePost(postId) {
  return {
    type: REMOVE_POST,
    payload: postId
  };
}

export function editPost(postObj, postId) {
  return async function(dispatch) {
    try {
      let { body, description, title } = postObj;
      const res = await axios.put(`${POSTS_URL}/${postId}`, {
        title,
        body,
        description
      });
      dispatch(editedPost(res.data));
    } catch (error) {
      const errorMessage = error.response.data;
      dispatch(showErr(errorMessage));
    }
  };
}

function editedPost(postObj, postId) {
  return {
    type: EDIT_POST,
    payload: { postObj, postId }
  };
}

export function addCommentToAPI(commentObj, postId) {
  return async function(dispatch) {
    try {
      const { comment } = commentObj
      const res = await axios.post(`${POSTS_URL}/${postId}/comments/`, { text: comment });
      return dispatch(addComment(res.data, postId))
    } catch (error) {
      dispatch(showErr(error))
    }
  }
}

function addComment(commentObj, postId) {
  return {
    type: ADD_COMMENT,
    payload: { commentObj, postId }
  };
}

export function deleteCommentFromAPI(commentId, postId) {
  return async function(dispatch) {
    try {
      await axios.delete(`${POSTS_URL}/${postId}/comments/${commentId}`);
      return dispatch(deleteComment(commentId, postId));
    } catch (error) {
      dispatch(showErr(error))
    }
  }
}

function deleteComment(commentId, postId) {
  return {
    type: DELETE_COMMENT,
    payload: { commentId, postId }
  };
}

export function getOnePost(postId) {
  return async function(dispatch) {
    try {
      const res = await axios.get(`${POSTS_URL}/${postId}`);
      dispatch(gotOnePost(res.data));
    } catch (error) {
      const errorMessage = error.response.data;
      dispatch(showErr(errorMessage));
    }
  };
}

function gotOnePost(posts) {
  return {
    type: GOT_ONE_POST,
    payload: posts
  };
}

export function sendVoteToAPI(id, direction) {
  return async function (dispatch) {
    const response = await axios.post(`${POSTS_URL}/${id}/vote/${direction}`);
    return dispatch(vote(id, response.data.votes));
  };
}

function vote(postId, votes) {
  return {
    type: VOTE,
    postId: postId,
    votes: votes,
  };
}