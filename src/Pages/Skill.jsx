import React from "react";
import { Container, Row } from "react-bootstrap";
import "./Skill.css";
import Images from "../components/Images";

export const Skill = () => {
  return (
    <>
      <section className="my_skill" id="skill">
        <Container>
            <h1 data-aos="fade-right" className="myskill">My Skill</h1>
          <div data-aos="fade-left">
            <Row>
              <div className="col-lg-3 col-6">
                <div className="skill-image">
                  <Images title="" imageurl="src/assets/img/html.png" />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div className="skill-image">
                  <Images title="" imageurl="src/assets/img/css.png" />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div className="skill-image">
                  <Images
                    className="js_img"
                    title=""
                    imageurl="src/assets/img/javascript.png"
                    style="width:150px;"
                  />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div className="skill-image">
                  <Images title="" imageurl="src/assets/img/react.png" />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div className="skill-image">
                  <Images title="" imageurl="src/assets/img/python.png" />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div className="skill-image">
                  <Images title="" imageurl="src/assets/img/django-icon.jpeg" />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div className="skill-image">
                  <Images title="" imageurl="src/assets/img/bootstrap.png" />
                </div>
              </div>
              <div className="col-lg-3 col-6 ">
                <div className="skill-image">
                  <Images title="" imageurl="src/assets/img/github.png" />
                </div>
              </div>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};
