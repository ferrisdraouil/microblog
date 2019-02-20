import React, { Component } from 'react';
import uuid from 'uuid';
import BlogCard from './BlogCard';
import { Spinner, Row, Col, Jumbotron, Container } from 'reactstrap';

class HomePage extends Component {
  render() {
    let { posts } = this.props;
    if (!posts) {
      return (
        <Spinner
          style={{ width: '3rem', height: '3rem', margin: '5rem' }}
          type="grow"
          color="primary"
        />
      );
    }
    return (
      <div className="HomePage">
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-4">Welcome to Microblog</h1>
          </Container>
        </Jumbotron>
        <Row>
          <Col
            sm="12"
            md={{ size: 6, offset: 3 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              alignContent: 'stretch',
              justifyContent: 'space-around',
              flexFlow: 'row wrap'
            }}
          >
            {Object.keys(posts).map(postId => (
              <BlogCard
                key={uuid()}
                title={posts[postId].title}
                body={posts[postId].body}
                description={posts[postId].description}
                id={postId}
              />
            ))}
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;
