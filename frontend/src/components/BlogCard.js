import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

class BlogCard extends Component {
  render() {
    let { id, title, description } = this.props;

    return (
      <section>
        <Card fluid="true" style={{ margin: '2em' }}>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              <Link to={`${id}`}>{title}</Link>
            </CardTitle>
            <CardText className="font-italic">{description}</CardText>
          </CardBody>
        </Card>
      </section>
    );
  }
}

export default BlogCard;
