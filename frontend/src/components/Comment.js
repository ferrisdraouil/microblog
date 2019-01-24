import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.deleteComment(this.props.postId, this.props.commentId);
  }

  render() {
    return (
      <div className="Comment">
        <span>
          <button onClick={this.handleClick}>
            <i class="fas fa-trash-alt" />
          </button>
          {this.props.text}
        </span>
      </div>
    );
  }
}

export default Comment;
