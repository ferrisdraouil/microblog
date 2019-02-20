import React, { Component } from 'react';
import BlogForm from '../components/BlogForm';
import { editPost, addPost } from '../actions';
import { connect } from 'react-redux';

class BlogFormContainer extends Component {
  render() {
    return (
      <div className="BlogFormContainer">
        <BlogForm postId={this.props.postId} {...this.props} />
      </div>
    );
  }
}

export default connect(
  null,
  { editPost, addPost }
)(BlogFormContainer);
