import React, { Component } from 'react';
import { CardBody, Card, CardText, CardTitle } from 'reactstrap';
import BlogForm from './BlogForm';
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
    this.props.remove(this.props.id);
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
        <BlogForm
          title={this.props.title}
          body={this.props.body}
          description={this.props.description}
          id={this.props.id}
          addPost={this.props.handleEdit}
        />
      );
    } else {
      return (
        <section>
          <Card>
            <CardBody>
              <CardTitle className="font-weight-bold text-center">
                {this.props.title}
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
                {this.props.description}
              </CardText>
              <CardText>{this.props.body}</CardText>
            </CardBody>
          </Card>
          <CommentList
            id={this.props.id}
            addComment={this.props.addComment}
            deleteComment={this.props.deleteComment}
            comments={this.props.comments}
          />
        </section>
      );
    }
  }
}

export default BlogDetails;
