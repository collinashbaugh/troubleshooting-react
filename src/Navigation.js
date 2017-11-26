import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return ( 
            <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#">WhereToGo</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="#">Countries</NavItem>
                <NavItem eventKey={2} href="#">Highest Rated</NavItem>
                <NavItem eventKey={2} href="#">Most Visited</NavItem>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="#">Log In</NavItem>
                <NavItem eventKey={2} href="#">Sign Up</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

  export default Navigation;
  