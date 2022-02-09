import React from 'react';
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
    <div className='cars'>
      <h1>Are you a driver or a rider for the excursion? </h1> 
      {/* To Do: change the excursion to the title? */}
      <Button onClick={handleDriverClick} variant="primary" type="submit">
        Driver
      </Button>
      <Button onClick={handleRiderClick} variant="primary" type="submit">
        Rider
      </Button>
    </div>
  );
}

export default Cars;