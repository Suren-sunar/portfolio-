import React, { useEffect } from "react";
import "./About.css";
import { Container, Row } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

export const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, [onscroll]);
  return (
    <section className="about-me" id="about">
      <Container>
        <div className="pic_center">
          <img  data-aos="zoom-in-down" className="mypic" src="src/assets/img/mypic.png" alt="mypic" />
        </div>

          <h1 data-aos="fade-left" className="overview">Overview</h1>
        <div data-aos="flip-up">
          <h4 className="myself">
            As a Frontend Developer, I specialize in creating user-friendly
            interfaces using JavaScript and React. With a focus on simplicity
            and efficiency, I work closely with clients to understand their
            needs and deliver visually appealing designs that enhance usability.
            Let's collaborate to turn your ideas into engaging frontend
            solutions!
          </h4>
        </div>
      </Container>
    </section>
  );
};
