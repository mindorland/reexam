import React from "react"
import { useState } from "react"
import { Button, Form, Dropdown, DropdownButton } from "react-bootstrap"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import Parse from "parse/dist/parse.min.js"
import { useEffect } from "react"

function Rider() {
  const [requests, sestRequests] = useState()
  const [status, setStatus] = useState("requested")
  const navigate = useNavigate()
  const [drives, setDrives] = useState()

  const requestsValue = Number(requests) //to convert data value to Number

  useEffect(() => {
    if (!drives) {
      getDrives()
    }
  }, [])

  const getDrives = async () => {
    const Drives = new Parse.Object.extend("Drives")
    const query = new Parse.Query(Drives)
    query.equalTo("isClosed", false)
    const results = await query.find()
    console.log("Successfully retrieved " + results.length + " drives.")
    setDrives(results)
    console.log(results[0].get("remainingSeats"))
    console.log(results[0].id)
    console.log(
      results[0].get("driver").then((driver) => {
        driver.get("username")
      })
    )
  }

  function handleSave(e) {
    e.preventDefault()
    const RideRequest = new Parse.Object.extend("RideRequest")
    const request = new RideRequest()
    const currentUser = Parse.User.current()

    request.set("requestedSeats", requestsValue)
    request.set("status", status)
  }

  //get all registed drives.

  return (
    <div className="cars">
      <h1>Available rides </h1>
      {drives && (
        <ul>
          {drives.map((drive) => (
            <li key={drive.id}>
              {drive.get("driver").get("name")} shares {drive.get("remainingSeats")} seats.
            </li>
          ))}
        </ul>
      )}
      <Button onClick={handleSave} variant="primary" type="submit">
        Save
      </Button>
    </div>
  )
}

export default Rider
