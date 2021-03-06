import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogDetails from '../components/BlogDetails';
import {
  editPost,
  addCommentToAPI,
  deleteCommentFromAPI,
  getOnePost,
  deletePost
} from '../actions';

class BlogDetailsContainer extends Component {
  render() {
    let { post, postId, editPost, getOnePost, deletePost } = this.props;

    return (
      <BlogDetails
        {...this.props}
        post={post}
        postId={postId}
        editPost={editPost}
        getOnePost={getOnePost}
        deletePost={deletePost}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    post: state.posts[ownProps.postId]
  };
}

export default connect(
  mapStateToProps,
  { deletePost, editPost, deleteCommentFromAPI, addCommentToAPI, getOnePost }
)(BlogDetailsContainer);
