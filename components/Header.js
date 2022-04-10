import React from "react";
import Link from "next/link";
import { Container, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link href={"/"}>
          <Navbar.Brand href={"/"}>Movie APP</Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
};

export default Header;
