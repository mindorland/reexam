import React from "react";
import { useState } from "react";
import { ListGroup, Card, ListGroupItem } from "react-bootstrap";
import Parse from "parse/dist/parse.min.js";
import { useEffect } from "react";
import RequestCancelBtn from "../../components/Buttons/RequestCancelBtn";
import "../../OurStyle.css";

function Rider() {
  const [requests, sestRequests] = useState();
  const [drives, setDrives] = useState();
  const [drivers, setDrivers] = useState();

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

  const handleRequest = (id) => {
    console.log(id + " clicked");
    const Drives = new Parse.Object.extend("Drives");
    const query = new Parse.Query(Drives);
    const currentUser = Parse.User.current();

    query.get(id).then(
      (drive) => {
        console.log(drive);
        console.log(drive.attributes.driver.id);

        const DriveRequests = new Parse.Object.extend("DriveRequests");
        const driveRequest = new DriveRequests();
        driveRequest.set("drive", drive.id);
        driveRequest.set("driver", drive.attributes.driver.id);
        driveRequest.set("requestFrom", currentUser);
        driveRequest
          .save()
          .then((request) => alert("New object created with objectId: "));
      },
      (error) => {
        console.log("error");
      }
    );
  };

  const handleCancel = (id) => {
    console.log(id + "cancel clicked");
    const Drives = new Parse.Object.extend("Drives");
    const query = new Parse.Query(Drives);
    query.get(id).then(
      (drive) => {
        console.log(drive);
      },
      (error) => {
        console.log("error", error);
      }
    );
  };

  return (
    <Card
      style={{ border: "none", width: "500rem" }}
      className="card-container"
    >
      <p className="ptitle flex-parent">Available rides </p>
      {drivers && (
        <ListGroup className="ptitle flex-parent ">
          {drives.map((drive) => (
            <ListGroupItem
              style={{ border: "none" }}
              className="subtitle picture-margin flex-parent"
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
    </Card>
  );
}

export default Rider;
