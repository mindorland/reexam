import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Parse from "parse/dist/parse.min.js";
import { useState, useEffect } from "react";

function Cars() {
  const navigate = useNavigate();
  const [hasRegistered, setHasRegistered] = useState(false);
  
  // const Drives = new Parse.Object.extend("Drives"); //create a new Parse Obejct subclass
  // const query = Parse.Query(Drives); 
  function findDriver() {
    const currentUser = Parse.User.current();
    console.log(currentUser.attributes.isDriver)
    const isDriver = currentUser.get("isDriver")
    setHasRegistered(isDriver)
  }

  useEffect(() => {
    findDriver()
  }, [])

  function handleDriverClick(e) {
    e.preventDefault();
    if (!hasRegistered) {navigate("/cars/driver")} else {
      navigate("/cars/driverStatus")
    }
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
          <Button 
            onClick={handleDriverClick} 
            variant="primary" 
            type="submit"
          >
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
