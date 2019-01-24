import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.comments) {
      return (
        <div className="CommentList">
          <hr />
          <h4>Comments</h4>
          <ul>
            {this.props.comments.map(comment => {
              return (
                <li>
                  <Comment
                    text={comment.text}
                    commentId={comment.id}
                    postId={this.props.id}
                    deleteComment={this.props.deleteComment}
                  />
                </li>
              );
            })}
          </ul>
          <CommentForm
            addComment={this.props.addComment}
            deleteComment={this.props.deleteComment}
            id={this.props.id}
          />
        </div>
      );
    } else {
      return (
        <div>
          <hr />
          <h4>Comments</h4>
          <CommentForm
            addComment={this.props.addComment}
            deleteComment={this.props.deleteComment}
            id={this.props.id}
          />
        </div>
      );
    }
  }
}

export default CommentList;
