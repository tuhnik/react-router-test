import React from "react";
import { BrowserRouter, Route, NavLink} from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import Home from "./Home";
import Info from "./Info";
import Contact from "./Contact";

class Main extends React.Component {
   
    render() {
      return (
        <BrowserRouter>
            <div>
            <div className = "container">
            <div className = "py-5 text-center">
                <div className="container">
                    <h1><span className = "frog" role="img" aria-label="frog image">🐸</span> Oh, wow</h1>
                    <p className="lead text-muted">Welcome to some random test page...</p>
                </div>
            </div>
            <Nav tabs>
                <NavItem>
                    <NavLink className="nav-link" href="#" exact to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" href="#" to="/info">Info</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" href="#" to="/contact">Contact</NavLink>
                </NavItem>
            </Nav>
            <div className="py-5">
                <Route exact path="/" component={Home}/>
                <Route path="/info" component={Info}/>
                <Route path="/contact" component={Contact}/>
            </div>
            </div>
            <footer className="footer">
      <div className="container">
        <span className="text-muted">This is how sticky footers are made...</span>
      </div>
    </footer>
            </div>
            
            </BrowserRouter>
      );
    }
  }
 
export default Main;