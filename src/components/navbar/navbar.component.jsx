import React, { Fragment } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "./navbar.styles.css";

/**
 * This functional component contains navbar and its elements
 * To-Do: The react-router-dom will soon be doing the routing and links.
 *
 * @author Jay
 */
const NavBar = () => {
  return (
    <Fragment>
      <Navbar variant="dark" className="nav">
        <Navbar.Brand href="#home">Build Box</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Top Builds</Nav.Link>
          <Nav.Link href="#pricing">Parts Gallery</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-light">Search</Button>
        </Form>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
