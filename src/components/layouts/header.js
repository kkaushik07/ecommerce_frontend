import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/" className="navbar-brand">Admin Dashboard</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>  */}
          </Nav>
          <Nav>
            {/* <Nav.Link href="/signin">SignIn</Nav.Link>
           <Nav.Link eventKey={2} href="/signup">SignUp</Nav.Link> cannot use these due to use of react router dom*/}
          
          <li className="nav-item">
          <NavLink to= 'signin' className="nav-link">SignIn</NavLink></li>
          <li className="nav-item">
          <NavLink to= 'signup' className="nav-link">SignUp</NavLink></li>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
        </div>
    )
}

export default Header