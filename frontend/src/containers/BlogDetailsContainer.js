import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogDetails from '../components/BlogDetails';
import { removePost, editPost, addComment, deleteComment } from '../actions';

class BlogDetailsContainer extends Component {
  render() {
    return <BlogDetails {...this.props} postId={this.props.postId} />;
  }
}

function mapStateToProps(state, ownProps) {
  return {
    post: state.posts[ownProps.match.params.id]
  };
}

export default connect(
  mapStateToProps,
  { removePost, editPost, deleteComment, addComment }
)(BlogDetailsContainer);
