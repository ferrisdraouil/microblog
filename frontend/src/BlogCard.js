import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

class BlogCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section>
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              <Link to={`${this.props.id}`}>{this.props.title}</Link>
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
