import React from "react";
import { Container, Row } from "react-bootstrap";

const Card = ({ Title, Body, image, Github, Live }) => {
  return (
    <div className="card text-start">
      <img className="card-img-top" src={image} alt="{Title}" />
      <div className="card-body">
        <h4 className="card-title">{Title}</h4>
        <p className="card-text">{Body}</p>
        <div className="git-btn">
          <div className="row">
            <div className="col-md-6 git-btn">
              <a target="_blank" href={Github}>
                <button>Github</button>
              </a>
            </div>
            <div className="col-md-6 live-btn">
              <a target="_blank" href={Live}>
                <button>Live</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
