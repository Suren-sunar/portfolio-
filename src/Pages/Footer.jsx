import React from "react";
import { SocialIcon } from "react-social-icons";
import "./Footer.css";
import { Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <div data-aos="flip-right">
      <h6>Find me on:</h6>
      <Container>
        <Row className="justify-content-center">
          <div className="social">
            <SocialIcon
              className="social"
              url="https://www.facebook.com/su.ren.58910"
            />
            <SocialIcon
              className="social"
              url="https://github.com/Suren-sunar"
            />
            <SocialIcon
              className="social"
              url="https://www.instagram.com/__sur__en/"
            />
            <SocialIcon
              className="social"
              url="https://www.linkedin.com/in/surendra-sunar-7b6012287"
            />
          </div>
        </Row>
        <h6>Copyright &copy;2024 SUREN </h6>
      </Container>
    </div>
  );
};