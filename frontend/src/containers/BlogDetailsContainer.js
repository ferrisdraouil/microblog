import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogDetails from '../components/BlogDetails';
import { removePost, editPost } from '../actions';

class BlogDetailsContainer extends Component {
  render() {
    return <BlogDetails {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    post: state.posts[this.props.match.params.id]
  };
}

export default connect(
  mapStateToProps,
  { removePost, editPost }
)(BlogDetailsContainer);
