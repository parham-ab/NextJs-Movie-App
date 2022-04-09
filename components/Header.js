import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movie APP</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
