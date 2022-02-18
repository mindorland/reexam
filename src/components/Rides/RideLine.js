import React from 'react'
import { Button, Form } from "react-bootstrap"

export default function RideLine(props) {
    function handleRequest() {
        console.log('requested')
    }

    function handleCancel() {
        console.log('cancelled')
    }
    
  return (
    <div>
        <h2>{props.username} shares {props.availableSeats}/{props.totalSeats} seats.</h2>
        <button onClick={handleRequest}>Request</button>
        <button onClick={handleCancel}>Cancel</button>
    </div>
  )
}
