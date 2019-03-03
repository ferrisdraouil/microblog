import React, { Component } from 'react';
import './HomePage.css';
import uuid from 'uuid';
import BlogCard from './BlogCard';
import { Spinner, Row, Col, Jumbotron, Container } from 'reactstrap';

class HomePage extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }
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
        <Jumbotron fluid style={{ marginBottom: '0%' }}>
          <Container fluid>
            <h1 className="display-4 welcome">Welcome to Ferrisblog</h1>
          </Container>
        </Jumbotron>

        <Row>
          <Col md={{ size: 4 }} className="borderColumn" />

          <Col md={{ size: 4 }}>
            {Object.keys(posts).map(postId => (
              <Row key={uuid()}>
                <Col
                  sm="12"
                  md={{ size: 6, offset: 3 }}
                  style={{ marginTop: '5%' }}
                  className="blogCard"
                >
                  <BlogCard
                    key={uuid()}
                    title={posts[postId].title}
                    body={posts[postId].body}
                    description={posts[postId].description}
                    id={postId}
                  />
                  <i className="fas fa-thumbs-up text-success ml-2" />
                  <i className="fas fa-thumbs-down text-danger ml-2" />
                </Col>
              </Row>
            ))}
          </Col>
          <Col md={{ size: 4 }} className="borderColumn" />
        </Row>
      </div>
    );
  }
}

export default HomePage;
