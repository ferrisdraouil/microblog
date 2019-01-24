import {
  ADD_POST,
  REMOVE_POST,
  EDIT_POST,
  ADD_COMMENT,
  DELETE_COMMENT
} from './actionTypes';

export function addPost(postObj) {
  return {
    type: ADD_POST,
    payload: postObj
  };
}
export function removePost(postId) {
  return {
    type: REMOVE_POST,
    payload: postId
  };
}

export function editPost(postObj, postId) {
  return {
    type: EDIT_POST,
    payload: { postObj, postId }
  };
}

export function addComment(commentObj, postId) {
  return {
    type: ADD_COMMENT,
    payload: { commentObj, postId }
  };
}

export function deleteComment(commentId, postId) {
  return {
    type: DELETE_COMMENT,
    payload: { commentId, postId }
  };
}
