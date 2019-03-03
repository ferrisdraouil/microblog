import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from '../components/HomePage';
import { getAllPosts, sendVoteToAPI } from '../actions';

class HomePageContainer extends Component {
  render() {
    return <HomePage {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(
  mapStateToProps,
  { getAllPosts, sendVoteToAPI }
)(HomePageContainer);
