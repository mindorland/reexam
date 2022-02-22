import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Cars() {
  const navigate = useNavigate();

  function handleDriverClick(e) {
    e.preventDefault();
    navigate("/cars/driver");
  }

  function handleRiderClick(e) {
    e.preventDefault();
    navigate("/cars/rider");
  }

  return (
    <Card style={{ width: "50rem" }} className="card-container jc-center">
      <div class="flex-parent jc-center">
        <Card.Title className="header1">
          Are you a driver or a rider for the excursion?
        </Card.Title>
      </div>
      <Card.Body className="jc-center">
        <div class="flex-parent jc-center">
          <Button
            className="car-button"
            onClick={handleDriverClick}
            type="submit"
          >
            Driver
          </Button>
          <Button
            className="car-button"
            text="subtitle"
            onClick={handleRiderClick}
            variant="primary"
            type="submit"
          >
            Rider
          </Button>
        </div>
      </Card.Body>

      {/* To Do: change the excursion to the title? */}
    </Card>
  );
}

export default Cars;
