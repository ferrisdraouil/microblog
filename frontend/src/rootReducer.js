// import {
//   ADD_POST,
//   REMOVE_POST,
//   EDIT_POST,
//   ADD_COMMENT,
//   DELETE_COMMENT
// } from './actionTypes';
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
    // case ADD_POST: {
    // }
    // case REMOVE_POST: {
    // }
    // case EDIT_POST: {
    // }
    // case ADD_COMMENT: {
    // }
    // case DELETE_COMMENT: {
    // }
    default:
      return state;
  }
}

export default rootReducer;
