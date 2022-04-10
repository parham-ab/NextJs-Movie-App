import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-5 shadow-lg">
      <Container className="p-4">
        <Row>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h4>About This Project</h4>

            <p>
              This is actually my first project with Next Js & im developing
              this website during learning Next Js, so I hope you enjoy it
              anyway. I'd be appreciate if you send me your suggestions,
              comments, criticisms & job offers ✌.
            </p>
          </div>

          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h4>About Me</h4>

            <p>
              Im' Parham Abolghasemi, Im a Front-End developer & I currently
              learning Next Js. here on my portfolio website, I have prepared a
              box for you that you can{" "}
              <a
                href="https://parham-portfolio.netlify.app/#contact"
                target={"_blank"}
                className="fw-bold"
              >
                Contact me
              </a>
              . I'll be happy if you send me your suggestions, comments,
              criticisms & job offers .
            </p>
          </div>
        </Row>
      </Container>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Made width <span className="text-danger">❤ </span> by{" "}
        <a
          className="text-dark fw-bold"
          href="https://parham-portfolio.netlify.app/"
          target={"_blank"}
        >
          Parham Abolghasemi
        </a>
      </div>
    </footer>
  );
};

export default Footer;
