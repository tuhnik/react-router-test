import React, { Component } from "react";
import { Container} from 'reactstrap';

class Home extends Component {
  componentDidMount(){
        document.title = "Home"
      }  
  render() {
    return (  
      <Container>
        <h2>Hi!</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </Container>  
    );
  }
}
 
export default Home;