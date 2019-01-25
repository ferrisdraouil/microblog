import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../App';
import { getAllPosts } from '../actions';

class AppContainer extends Component {
  render() {
    return <App {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(
  mapStateToProps,
  { getAllPosts }
)(AppContainer);
