import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody
} from 'reactstrap';
import { withRouter } from 'react-router-dom';

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || '',
      description: props.description || '',
      body: props.body || ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (!this.props.postId) {
      this.props.addNewPost(this.state);
    } else {
      this.props.editPost(this.state, this.props.postId);
    }

    this.setState({ title: '', description: '', body: '' });
    this.props.history.push('/');
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleCancel(evt) {
    evt.preventDefault();
    this.props.history.push('/');
  }

  render() {
    let { body, description, title } = this.state;

    return (
      <div className="BlogForm">
        <section>
          <Card>
            <CardBody>
              <Form onSubmit={this.handleSubmit}>
                <legend>New Post</legend>

                <FormGroup>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    name="title"
                    id="title"
                    defaultValue={title}
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="description">Description</Label>
                  <Input
                    name="description"
                    id="description"
                    defaultValue={description}
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="body">Body</Label>
                  <Input
                    name="body"
                    id="body"
                    defaultValue={body}
                    onChange={this.handleChange}
                    required
                  />
                </FormGroup>

                <Button type="submit">Submit</Button>

                <Button onClick={this.handleCancel}>Cancel</Button>
              </Form>
            </CardBody>
          </Card>
        </section>
      </div>
    );
  }
}

export default withRouter(BlogForm);
