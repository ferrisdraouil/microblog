import React, { Component } from 'react';
import { CardBody, Card, CardText, CardTitle, Button } from 'reactstrap';
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

  componentDidMount() {
    this.props.getOnePost(this.props.postId);
  }

  handleRemove() {
    this.props.deletePost(this.props.postId);
    this.props.history.push('/');
  }

  toggleEdit() {
    this.setState({
      isEdited: true
    });
  }

  render() {
    let { title, description, body, comments } = this.props.post;
    let { post, postId, editPost, addComment, deleteComment } = this.props;

    if (!post) {
      return <h3>Loading</h3>;
    }
    if (this.state.isEdited) {
      return (
        <BlogFormContainer
          postId={postId}
          title={title}
          description={description}
          body={body}
          editPost={editPost}
        />
      );
    } else {
      console.log(this.props);
      return (
        <section>
          <Card>
            <CardBody>
              <CardTitle className="font-weight-bold text-center">
                {title}
              </CardTitle>
              <CardText className="font-italic">{description}</CardText>

              <CardText>{body}</CardText>
              <Button onClick={this.handleRemove} className="mr-1">
                <i className="fas fa-trash-alt" />
              </Button>
              <Button onClick={this.toggleEdit} className="ml-1">
                <i className="far fa-edit" />
              </Button>
            </CardBody>
          </Card>
          <CommentList
            postId={postId}
            addComment={addComment}
            deleteComment={deleteComment}
            comments={comments}
          />
        </section>
      );
    }
  }
}

export default BlogDetails;
