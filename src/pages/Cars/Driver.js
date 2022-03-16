import React from "react";
import { useState } from "react";
import { Button, Form, Dropdown, DropdownButton, Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Parse from "parse/dist/parse.min.js";
import "/Users/kdawg/Documents/School/reexam/src/OurStyle.css";

function Driver() {
  const [seats, setSeats] = useState();
  const [notes, setNotes] = useState();
  const [isClosed, setIsClosed] = useState(false); // is it open case or not?
  const navigate = useNavigate();

  const seatsValue = Number(seats); //to convert data values to Number

  function handleSave(e) {
    e.preventDefault();

    const Drives = new Parse.Object.extend("Drives"); //create a new Parse Obejct subclass
    const drive = new Drives(); // Create a new instance
    const currentUser = Parse.User.current(); //get current user

    drive.set("driver", currentUser); //to figure out!!
    drive.set("fullSeats", seatsValue); //fullSeats is to store the total number of available seats
    drive.set("remainingSeats", seatsValue); //to manage the remaining seats
    drive.set("notes", notes);
    drive.set("isClosed", isClosed);
    currentUser.set("isDriver", true);

    drive.save().then(
      (drive) => {
        navigate("/cars/driverstatus");
        //alert("New object created");
      },
      (error) => {
        //alert("Failed to create new object" + error.message);
      }
    );
  }

  //   function handleCancel(e) {
  //     e.preventDefault()
  //   }

  function handleSelect(e) {
    console.log(e);
    setSeats(e);
  }

  return (
    <>
      <Card style={{ width: "50rem" }} className="card-container">
        <div class="flex-parent jc-center">
          <Card.Title className="header1">Car Information </Card.Title>
        </div>
        <Card.Body className="jc-center">
          <div class="flex-parent jc-center">
            <Card.Text className="header2">Available seats</Card.Text>
            <DropdownButton
              className="drop-button"
              id="dropdown-basic-button"
              title="Dropdown button"
              onSelect={handleSelect}
            >
              <Dropdown.Item eventKey="1">1</Dropdown.Item>
              <Dropdown.Item eventKey="2">2</Dropdown.Item>
              <Dropdown.Item eventKey="3">3</Dropdown.Item>
              <Dropdown.Item eventKey="4">4</Dropdown.Item>
              <Dropdown.Item eventKey="5">5</Dropdown.Item>
            </DropdownButton>
          </div>
          <div class=" jc-center">
            <Card.Text className="emph-body">
              You selected {seats} seats
            </Card.Text>
          </div>
          {/* maybe change this to conditional rendering to show only if seats are not null */}
          <div class="jc-center flex-parent">
            <Form class="flex-parent jc-center">
              <Form.Group className="mb-3" controlId="formBasicNotes">
                <Form.Label className="emph-body">Notes</Form.Label>
                <Form.Control
                  className="narrow-textfield"
                  type="text"
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="i.e., Departure place/time"
                  autoFocus
                />
              </Form.Group>
            </Form>

            <Button
              className="primary-button"
              onClick={handleSave}
              variant="primary"
              type="submit"
            >
              Save
            </Button>
          </div>
          {/* <Button onClick={handleCancel} variant="primary" type="submit">
            Cancel
        </Button> */}
          {/* To Do: clear the form. Maybe have to use 3rd party library....  */}
        </Card.Body>
      </Card>
    </>
  );
}

export default Driver;
