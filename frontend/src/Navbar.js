import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarBrand } from 'reactstrap';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavbarBrand href="/" className="mr-auto">
            Blog Home
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/new/" className="mr-auto">
                {' '}
                Add New Post{' '}
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavBar;
