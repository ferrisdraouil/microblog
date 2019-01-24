import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomePage from '../components/HomePage';

class HomePageContainer extends Component {
  render() {
    console.log('HomePageContainer props? ', this.props);
    return <HomePage {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps)(HomePageContainer);
