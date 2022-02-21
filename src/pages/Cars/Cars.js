import React from "react";
import { Button } from "react-bootstrap";
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
    <div className="cars">
      <div class="card">
        <div class="card-header">
          Are you a driver or a rider for the excursion?
        </div>
        <div class="card-body">
          <Button onClick={handleDriverClick} variant="primary" type="submit">
            Driver
          </Button>
          <Button
            className="primary-button"
            onClick={handleRiderClick}
            variant="primary"
            type="submit"
          >
            Rider
          </Button>
        </div>
        <div class="card-footer">Footer</div>
      </div>
      <h1> </h1>
      {/* To Do: change the excursion to the title? */}
    </div>
  );
}

export default Cars;
