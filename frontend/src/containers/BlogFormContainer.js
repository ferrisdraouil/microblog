import React, { Component } from 'react';
import BlogForm from '../components/BlogForm';
import { editPost, addPost } from '../actions';
import { connect } from 'react-redux';

class BlogFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="BlogFormContainer">
        <BlogForm postId={this.props.postId} {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(
  mapStateToProps,
  { editPost, addPost }
)(BlogFormContainer);
