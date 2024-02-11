import React from "react";
import "./Home.css";
import { Col, Row } from "react-bootstrap";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <section className="desktop" id="home">
      <div className="container">
        <div className="row">
          <div className="col-md-6 wrapper">
            <div className="Front">
              <p className="hi"> Hi,</p>
              <p className="suren"> I'm Surendra</p>
              <Typewriter
                className="typewriter"
                options={{
                  strings: ["Front End Developer"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 100,
                }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="myimg">
              <img className="homeimg" src="src/assets/img/OIG2.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
