import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Project.css";
import Card from "../components/Card";

export const Project = () => {
  //   const [isShowMore, setIsShowMore] =useState(false)

  // const ShowMore =()=>{
  //   setIsShowMore(!isShowMore)
  // }

  return (
    <section className="my-project" id="project">
      <div>
        <Container>
          <h1 className="myskill" data-aos="fade-left">
            My Projects
          </h1>
          <Row>
            <div className="col-md-3" data-aos="fade-right">
              <Card
                Title="Weather App"
                image="src/assets/img/weather.jpeg"
                Body="Experience accurate forecasts at your fingertips with my user-friendly weather app, delivering real-time weather details."
                Github="https://github.com/Suren-sunar/weather.git"
                Live="https://suren-weatherapp.netlify.app//"
              />
            </div>
            <div className="col-md-3" data-aos="zoom-in-up">
              <Card
                Title="Password Generator"
                image="src/assets/img/pass.jpg"
                Body="Generate strong & unique passwords. Protect your online presence with reliable password
                    generator."
                Github="https://github.com/Suren-sunar/PasswordGenerator.git"
                Live="https://suren-passwordgenerator.netlify.app/"
              />
            </div>

            <div className="col-md-3" data-aos="zoom-in-down">
              <Card
                Title="BMI Calculator"
                image="src/assets/img/bmi.png"
                Body="A BMI calculator assesses a person's body fat using their
                height and weight. It divides weight in kilograms by height
                in meters squared."
                Github="https://github.com/Suren-sunar/Bmi.git"
                Live="https://suren-bmicalculate.netlify.app/"
              />
            </div>
            <div className="col-md-3" data-aos="fade-left">
              <Card
                Title="Temperature Converter"
                image="src/assets/img/temp.png"
                Body="Experience the ease of temperature conversions with my Celsius to Fahrenheit converter with  accurate results"
                
                Github="https://github.com/Suren-sunar/Temperatureconv.git"
                Live="https://suren-temconverter.netlify.app/"
              />
            </div>
          </Row>
        </Container>
      </div>
    </section>
  );
};
