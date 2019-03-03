import React, { Component } from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { comment: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addComment(this.state, this.props.postId);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <div className="CommentForm">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="comment" style={{marginRight:'0.5em'}}>Speak up!</label>
          <input name="comment" id="comment" onChange={this.handleChange} />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default CommentForm;
