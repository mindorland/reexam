import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Parse from 'parse/dist/parse.min.js';
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function InfoWrite(props) {
  const [title, setTitle] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();

  //To convert data values to corresponding data types
  const startDateValue = new Date(startDate);
  const endDateValue = new Date(endDate);

  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();

    const Excursion = new Parse.Object.extend('Excursion'); //create a new Parse Object subclass
    const excursion = new Excursion(); // Create a new instance of that Excursion class

    excursion.set('title', title);
    excursion.set('startDate', startDate);
    excursion.set('endDate', endDate);
    excursion.set('location', location);
    excursion.set('description', description);

    excursion.save()
    .then((excursion)=> {
      navigate('/excursion');
      alert('New object created with objectId: '+ excursion.id);
    }, (error) => {
      alert('Failed to create new object' + error.message);
    })
  }

  return (
    <div className="pageContent">
      <h1>Create an excursion</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Date"
          />
          <Form.Control
            type="date"
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="Date"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </Form.Group>
        <Button onClick={handleRegister} variant="primary" type="submit">
          Submit
        </Button>
        <br />
        <br />
      </Form>
    </div>
  );
}