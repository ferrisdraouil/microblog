import React, { Component } from 'react';
import uuid from 'uuid';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentList extends Component {
  render() {
    let { comments, postId, deleteComment, addComment } = this.props;

    if (comments) {
      console.log('COMMENTS 2', comments);
      return (
        <div className="CommentList">
          <hr />
          <h4>Comments</h4>
          <ul>
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
