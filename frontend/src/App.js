import React, { Component } from 'react';
import './App.css';
import NavBar from './Navbar';
import HomePage from './HomePage';
import BlogForm from './BlogForm';
import BlogDetails from './BlogDetails';
import { Route, Switch } from 'react-router-dom';
import uuid from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.addPost = this.addPost.bind(this);
  }
  addPost(postObj) {
    postObj.id = uuid();
    let posts = [...this.state.posts, postObj];
    this.setState({ posts });
  }

  handleEdit() {}
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => (
              <HomePage posts={this.state.posts} {...routeProps} />
            )}
          />
          <Route
            exact
            path="/new/"
            render={routeProps => (
              <BlogForm addPost={this.addPost} {...routeProps} />
            )}
          />

          <Route
            exact
            path="/:id"
            render={routeProps => {
              let post = this.state.posts.find(
                post => post.id === routeProps.match.params.id
              );
              return (
                <BlogDetails
                  {...routeProps}
                  title={post.title}
                  body={post.body}
                  description={post.description}
                  id={post.id}
                  key={uuid()}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
