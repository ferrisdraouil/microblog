import React, { Component } from 'react';
import './CommentList.css'
import uuid from 'uuid';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentList extends Component {
  render() {
    let { comments, postId, deleteComment, addComment } = this.props;

    if (comments) {
      return (
        <div className="CommentList">
          <hr />
          <h5>Comments</h5>
          <ul style={{padding:'unset'}}>
            {comments.map(comment => {
              return (
                <li key={uuid()}>
                  <Comment
                    text={comment.text}
                    commentId={comment.id}
                    postId={postId}
                    deleteComment={deleteComment}
                  />
                </li>
              );
            })}
          </ul>
          <CommentForm
            addComment={addComment}
            deleteComment={deleteComment}
            postId={postId}
          />
        </div>
      );
    } else {
      return (
        <div>
          <hr />
          <h4>Comments</h4>
          <CommentForm
            addComment={addComment}
            deleteComment={deleteComment}
            postId={postId}
          />
        </div>
      );
    }
  }
}

export default CommentList;
