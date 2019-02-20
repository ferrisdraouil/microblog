import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentList extends Component {
  render() {
    let { comments, postId, deleteComment, addComment } = this.props;

    if (comments) {
      return (
        <div className="CommentList">
          <hr />
          <h4>Comments</h4>
          <ul>
            {Object.keys(comments).map(comment => {
              return (
                <li>
                  <Comment
                    text={comments[comment].text}
                    commentId={comment}
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
