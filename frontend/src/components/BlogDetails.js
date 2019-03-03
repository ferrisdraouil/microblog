import React, { Component } from 'react';
import './BlogDetails.css';
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

  // componentDidUpdate() {
  //   this.props.getOnePost(this.props.postId);
  // }

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
    let {
      post,
      postId,
      editPost,
      addCommentToAPI,
      deleteCommentFromAPI
    } = this.props;

    if (!post) {
      return <h3>Loading</h3>;
    }

    let { title, description, body, comments } = this.props.post;

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
            <CommentList
              postId={postId}
              addComment={addCommentToAPI}
              deleteComment={deleteCommentFromAPI}
              comments={comments}
            />
          </Card>
        </section>
      );
    }
  }
}

export default BlogDetails;
