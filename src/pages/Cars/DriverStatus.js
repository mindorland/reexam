import React from "react";
import Parse from "parse/dist/parse.min.js";
import { useState, useEffect } from "react";
import AcceptBtn from "../../components/Buttons/AcceptBtn";
import { useNavigate } from "react-router-dom";
import "../../OurStyle.css";

function DriverStatus() {
  const [requests, setRequests] = useState();
  const [users, setUsers] = useState();
  const DriveRequests = new Parse.Object.extend("DriveRequests");
  // const query = new Parse.Query(DriveRequests)
  const navigate = useNavigate();

  const getRequests = async () => {
    // const DriveRequests = new Parse.Object.extend("DriveRequests")
    const query = new Parse.Query(DriveRequests);
    query.equalTo("driver", Parse.User.current().id);
    const results = await query.find();
    setRequests(results);

    const Users = new Parse.Object.extend("User");
    const userQuery = new Parse.Query(Users);
    const userQueryResults = await userQuery.find();
    setUsers(userQueryResults);
  };

  const handleAccept = (id) => {
    console.log(id + "accept clicked");
    navigate("/cars/driverscomplete");
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <div className="home">
      <h1>Your Car</h1>
      {users && requests && (
        <>
          <h2>You have {requests.length} new request(s). </h2>
          {requests.map((request) => (
            <ul>
              <li key={request.id}>
                <h3>
                  Request from{" "}
                  {
                    users.find(
                      (x) => x.id === request.attributes.requestFrom.id
                    ).attributes.name
                  }
                </h3>
                <AcceptBtn
                  request={request}
                  key={request.id}
                  requestAccept={handleAccept}
                />
              </li>
            </ul>
          ))}
        </>
      )}
    </div>
  );
}

export default DriverStatus;
