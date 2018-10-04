import React, { Component } from "react";
import { Container} from 'reactstrap';

class Contact extends Component {
  componentDidMount(){
        document.title = "Contact me"
      }
  render() {
    return (
        <Container>
        <h2>Contact me</h2>
        <p> 
            Just send an email to <b>someone[at]somewhere.com</b>
        </p>
      </Container>
    );
  }
}
 
export default Contact;