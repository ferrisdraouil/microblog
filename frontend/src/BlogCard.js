import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

class BlogCard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleRemove() {
    this.props.remove(this.props.id);
    this.props.history.push('/');
  }

  handleEdit() {
    this.props.edit(this.props.id, this.props.post);
    this.props.history.push('/edit');
  }
  render() {
    return (
      <section>
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              <Link to={`${this.props.id}`}>{this.props.title}</Link>
              <span>
                <button onClick={this.handleRemove}>
                  <i class="far fa-edit" />
                </button>
                <button onClick={this.handleEdit}>Edit</button>
              </span>
            </CardTitle>
            <CardText className="font-italic">
              {this.props.description}
            </CardText>
          </CardBody>
        </Card>
      </section>
    );
  }
}

export default BlogCard;
