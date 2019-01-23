import React, { Component } from 'react';
import { CardBody, Card, CardText, CardTitle } from 'reactstrap';

class BlogDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description: '', body: '', id: 0 };
  }
  render() {
    // if(isEdited){
    //   reutrn <EditForm / >
    // } else {
    return (
      <section>
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              {this.props.title}
            </CardTitle>
            <CardText className="font-italic">
              {this.props.description}
            </CardText>
            <CardText>{this.props.body}</CardText>
          </CardBody>
        </Card>
      </section>
    );
  }
}
// }

export default BlogDetails;
