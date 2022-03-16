import React from "react";
import campfireImage from "../img/campfire.jpg";
import hikingImage from "../img/hiking.jpg";
import { Card } from "react-bootstrap";
import "../OurStyle.css";

function Home() {
  return (
    <Card style={{ width: "50rem" }} className="card-container jc-center">
      <Card.Title className="flex-parent jc-center">
        <p className="header1">AsoPlan</p>
      </Card.Title>

      <Card.Body className="jc-center">
        <div class="flex-parent jc-center">
          <p className="subtitle">Plan your trip with us!</p>
        </div>
        <div class="flex-parent jc-center">
          <img
            className="picture-margin"
            alt=""
            style={{ width: "400px" }}
            margin={{ bottom: "10px" }}
            src={campfireImage}
          />
        </div>
        <div class="flex-parent jc-center">
          <img
            className="picture-margin"
            alt=""
            style={{ maxWidth: "400px" }}
            src={hikingImage}
          />
        </div>
      </Card.Body>
    </Card>
  );
}

export default Home;
