import React, { Component } from 'react';
import uuid from 'uuid';
import BlogCard from './BlogCard';

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        {this.props.posts.length > 0 ? (
          this.props.posts.map(p => (
            <BlogCard
              key={uuid()}
              title={p.title}
              body={p.body}
              description={p.description}
              id={p.id}
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
