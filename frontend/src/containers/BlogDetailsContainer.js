import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogDetails from '../components/BlogDetails';
import {
  editPost,
  addComment,
  deleteComment,
  getOnePost,
  deletePost
} from '../actions';

class BlogDetailsContainer extends Component {
  render() {
    let { post, postId, editPost, getOnePost, deletePost } = this.props;

    console.log('CONTAINER RERENDER')

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
  { deletePost, editPost, deleteComment, addComment, getOnePost }
)(BlogDetailsContainer);
