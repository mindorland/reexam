import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Parse from "parse/dist/parse.min.js";
import { useState, useEffect } from "react";
import "/Users/kdawg/Documents/School/reexam/src/App.css";
import "/Users/kdawg/Documents/School/reexam/src/OurStyle.css";

function Cars() {
  const navigate = useNavigate();
  const [hasRegistered, setHasRegistered] = useState(false);

  // const Drives = new Parse.Object.extend("Drives"); //create a new Parse Obejct subclass
  // const query = Parse.Query(Drives);
  function findDriver() {
    const currentUser = Parse.User.current();
    console.log(currentUser.attributes.isDriver);
    const isDriver = currentUser.get("isDriver");
    setHasRegistered(isDriver);
  }

  useEffect(() => {
    findDriver();
  }, []);

  function handleDriverClick(e) {
    e.preventDefault();
    if (!hasRegistered) {
      navigate("/cars/driver");
    } else {
      navigate("/cars/driverStatus");
    }
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
            style={{ background: "#fa728b" }}
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
