import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="md">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink exact to="/" className="navbar-brand">
                Blog
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/new/">Add a New Post</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
