import React, { Component } from 'react';
import uuid from 'uuid';
import BlogCard from './BlogCard';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        {Object.keys(this.props.posts).length > 0 ? (
          Object.keys(this.props.posts).map(postId => (
            <BlogCard
              key={uuid()}
              title={this.props.posts[postId].title}
              body={this.props.posts[postId].body}
              description={this.props.posts[postId].description}
              id={postId}
            />
          ))
        ) : (
          <h3>Loading posts...</h3>
        )}
      </div>
    );
  }
}

export default HomePage;
