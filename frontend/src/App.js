import React, { Component } from 'react';
import './App.css';
import NavBar from './Navbar';
import HomePage from './HomePage';
import BlogForm from './BlogForm';
import BlogDetails from './BlogDetails';
import { Route, Switch, withRouter } from 'react-router-dom';
import uuid from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.addPost = this.addPost.bind(this);
    this.removePost = this.removePost.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.addComment = this.addComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }
  addPost(postObj) {
    postObj.id = uuid();
    let posts = [...this.state.posts, postObj];
    this.setState({ posts });
  }

  removePost(id) {
    let allPosts = [...this.state.posts];
    let newPosts = allPosts.filter(post => post.id !== id);
    this.setState({ posts: newPosts });
  }

  handleEdit(obj, id) {
    let newPosts = this.state.posts.filter(post => post.id !== id);
    let editedPost = {
      title: obj.title,
      description: obj.description,
      body: obj.body,
      id: id
    };
    newPosts = [...newPosts, editedPost];
    this.setState({ posts: newPosts });
  }

  addComment(comment, postId) {
    console.log('POST ID', postId);
    let allPosts = [...this.state.posts];
    let postIdx = allPosts.findIndex(post => post.id === postId);

    console.log('ALL POSTS', allPosts);
    console.log('POST IDX', postIdx);

    if (allPosts[postIdx].comments) {
      let newComments = [...allPosts[postIdx].comments];
      newComments.push({ text: comment.comment, id: uuid() });
      allPosts[postIdx].comments = newComments;
    } else {
      allPosts[postIdx].comments = [];
      allPosts[postIdx].comments.push({ text: comment.comment, id: uuid() });
    }
    this.setState({ posts: allPosts });
  }

  deleteComment(postId, commentId) {
    let allPosts = [...this.state.posts];
    let postIdx = allPosts.findIndex(post => post.id === postId);
    let allComments = [...allPosts[postIdx].comments];

    let newComments = allComments.filter(comment => comment.id !== commentId);
    allPosts[postIdx].comments = newComments;
    this.setState({ posts: allPosts });
  }

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
                  comments={post.comments}
                  remove={this.removePost}
                  handleEdit={this.handleEdit}
                  addComment={this.addComment}
                  deleteComment={this.deleteComment}
                />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
