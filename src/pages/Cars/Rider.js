import React from "react";
import { useState } from "react";
import {
  Button,
  Form,
  Dropdown,
  DropdownButton,
  ListGroup,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Parse from "parse/dist/parse.min.js";
import { useEffect } from "react";
import RequestCancelBtn from "../../components/Buttons/RequestCancelBtn";
import { List } from "antd/lib/form/Form";

function Rider() {
  const [requests, sestRequests] = useState();
  const [status, setStatus] = useState("requested");
  const navigate = useNavigate();
  const [drives, setDrives] = useState();
  const [drivers, setDrivers] = useState();
  const [isRequested, setIsRequested] = useState(false);
  const [requestDisable, setRequestDisable] = useState(false);
  const [cancelDisable, setCancelDisable] = useState(false);

  const requestsValue = Number(requests); //to convert data value to Number

  //to reload the page with the avilable rides info
  useEffect(() => {
    if (!drives) {
      getDrives();
    }
  }, []);

  useEffect(() => {
    if (!drivers) {
      getDrivers();
    }
  }, []);

  const getDrives = async () => {
    const Drives = new Parse.Object.extend("Drives");
    const query = new Parse.Query(Drives);
    query.equalTo("isClosed", false);
    const results = await query.find();
    console.log("Successfully retrieved " + results.length + " drives.");
    setDrives(results);
    console.log(results[0].get("remainingSeats"));
    console.log(results[0].id);
    console.log(results[0].get("driver").id);
    // console.log(drivers[0])
    // console.log(drivers.get(results[0].get("driver").id).username)
  };

  const getDrivers = async () => {
    /*
    This is to experiment how to query username. 
    */
    const Users = new Parse.Object.extend("User");
    const userQuery = new Parse.Query(Users);
    const results = await userQuery.find();
    setDrivers(results);
  };

  //   function handleSave(e) {
  //     const RideRequest = new Parse.Object.extend("RideRequest")
  //     const request = new RideRequest()
  //     const currentUser = Parse.User.current()

  //     request.set("driver", )
  //     request.set("requestedSeats", requestsValue)
  //     request.set("status", status)
  //   }

  const handleRequest = (id) => {
    //setIsRequested(isRequested => !isRequested)
    // setRequestDisable(true)
    console.log(id + "clicked");
    const Drives = new Parse.Object.extend("Drives");
    const query = new Parse.Query(Drives);
    query.get(id).then(
      (drive) => {
        console.log(drive);
        drive.set("requestsFrom", Parse.User.current());
      },
      (error) => {
        console.log("error");
      }
    );
  };

  const handleCancel = (id) => {
    // setRequestDisable(false)
    console.log(id + "cancel clicked");
    const Drives = new Parse.Object.extend("Drives");
    const query = new Parse.Query(Drives);
    query.get(id).then(
      (drive) => {
        console.log(drive);
        drive.set("requestsFrom", null);
      },
      (error) => {
        console.log("error");
      }
    );
  };
  //     const Drives = new Parse.Object.extend("Drives")
  //     const query = new Parse.Query(Drives)
  //     const drive = query.get(id)
  //     drive.set("requests", Parse.User.current())
  //   }

  //get all registed drives.

  return (
    <Card
      style={{ border: "none" }}
      style={{ width: "50rem" }}
      className="card-container"
    >
      <p className="ptitle flex-parent jc-center">Available rides </p>
      {drivers && (
        <ListGroup
          className="ptitle flex-parent jc-center"
          style={{ border: "none" }}
        >
          {drives.map((drive) => (
            <ListGroupItem
              style={{ border: "none" }}
              className="subtitle picture-margin jc-center flex-parent"
              key={drive.id}
            >
              {
                drivers.find((x) => x.id === drive.get("driver").id).attributes
                  .name
              }{" "}
              shares {drive.get("remainingSeats")} seats.
              <RequestCancelBtn
                drive={drive}
                key={drive.id}
                requestRide={handleRequest}
                cancelRide={handleCancel}
              />
            </ListGroupItem>
          ))}
        </ListGroup>
      )}
      {/* <Button onClick={handleSave} variant="primary" type="submit">
        Save Changes
      </Button> */}
    </Card>
  );
}

export default Rider;
