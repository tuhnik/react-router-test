import React, { Component } from "react";
import { Container} from 'reactstrap';
class Info extends Component {
  componentDidMount(){
        document.title = "Info"
      }
  render() {
    return (
        <Container>
        <h2>Super important information!</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ul>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ul>
      </Container>
    );
  }
}
 
export default Info;