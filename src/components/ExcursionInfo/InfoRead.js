import { useEffect, useState } from "react";
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
  const [excursion, setExcursion] = useState();
  const [imageFile, setImageFile] = useState();

  const getExcursion = async () => {
    const Excursion = Parse.Object.extend("Excursion");
    const query = new Parse.Query(Excursion);
    const res = await query.find();
    if (res) {
      setExcursion(res);
    }
  };

  useEffect(() => {
    getExcursion();
  }, []);

  try {
    const title = excursion.get("title");
    const startDate = excursion.get("startDate");
    const endDate = excursion.get("endDate");
    const location = excursion.get("location");
    const description = excursion.get("description");
    const imageFile = excursion.get("image");
    setTitle(title);
    setStartDate(startDate);
    setEndDate(endDate);
    setLocation(location);
    setDescription(description);
    setImageFile(imageFile);
  } catch (error) {
    alert("error occured");
  }

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
      {imageFile && (
        <img
          alt=""
          style={{ maxWidth: "400px" }}
          src={excursion.get("image").get("file").url()}
        />
      )}
    </div>
  );
}
