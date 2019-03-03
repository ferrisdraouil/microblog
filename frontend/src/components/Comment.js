import React, { Component } from 'react';
import './Comment.css'

class Comment extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.deleteComment(this.props.commentId, this.props.postId);
  }

  render() {
    return (
      <div className="Comment">
        <div>
          <em>{this.props.text}</em>
          <button onClick={this.handleClick}>
            <small>
              <i className="fas fa-trash-alt" />
            </small>
          </button>
        </div>
      </div>
    );
  }
}

export default Comment;
