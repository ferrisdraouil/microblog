import React, { Component } from 'react';
import { CardBody, Card, CardText, CardTitle } from 'reactstrap';
import BlogFormContainer from '../containers/BlogFormContainer';
import CommentList from './CommentList';

class BlogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdited: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.removePost(this.props.postId);
    this.props.history.push('/');
  }

  toggleEdit() {
    // this.props.handleEdit(this.state);
    this.setState({
      isEdited: true
    });
  }

  render() {
    if (this.state.isEdited) {
      return (
        <BlogFormContainer
          postId={this.props.postId}
          title={this.props.post.title}
          description={this.props.post.description}
          body={this.props.post.body}
        />
      );
    } else {
      return (
        <section>
          <Card>
            <CardBody>
              <CardTitle className="font-weight-bold text-center">
                {this.props.post.title}
                <span>
                  <button onClick={this.handleRemove}>
                    <i class="fas fa-trash-alt" />
                  </button>
                  <button onClick={this.toggleEdit}>
                    <i class="far fa-edit" />
                  </button>
                </span>
              </CardTitle>
              <CardText className="font-italic">
                {this.props.post.description}
              </CardText>
              <CardText>{this.props.post.body}</CardText>
            </CardBody>
          </Card>
          <CommentList
            postId={this.props.postId}
            addComment={this.props.addComment}
            deleteComment={this.props.deleteComment}
            comments={this.props.post.comments}
          />
        </section>
      );
    }
  }
}

export default BlogDetails;
