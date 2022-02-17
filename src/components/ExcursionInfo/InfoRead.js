import { useState } from "react";
// import { Form, Button } from "react-bootstrap";
import Parse from "parse/dist/parse.min.js";
// import { useNavigate } from "react-router";
// import { Link } from "react-router-dom";

export default function InfoRead(props) {
  const [title, setTitle] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [location, setLocation] = useState();
  const [description, setDescription] = useState();

  const Excursion = Parse.Object.extend("Excursion");
  const query = new Parse.Query(Excursion);
  query.get("9puofYppoH").then(
    (ex) => {
      const title = ex.get("title");
      const startDate = ex.get("startDate");
      const endDate = ex.get("endDate");
      const location = ex.get("location");
      const description = ex.get("description");
      setTitle(title);
      setStartDate(startDate);
      setEndDate(endDate);
      setLocation(location);
      setDescription(description);
    },
    (error) => {
      alert("error occured");
    }
  );

  return (
    <div className="pageContent">
      <h1>Next Excursion</h1>
      <h4>Title: {title} </h4>
      <h4>Location: {location} </h4>
      <h4>Description: {description} </h4>
    </div>
  );
}
