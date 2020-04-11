import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import { LinkContainer } from "react-router-bootstrap";

class MyNavBar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="sm" variant="dark" className="min-vh-15">
        <LinkContainer exact to="/">
          <Navbar.Brand>
            MA
            <br />
            BE
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <LinkContainer to="/projects">
              <Nav.Link active={false}>{"projects".toUpperCase()}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link active={false}>{"about me".toUpperCase()}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link active={false}>{"contact".toUpperCase()}</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

const NavbarWithRouter = withRouter(MyNavBar);
export default NavbarWithRouter;
