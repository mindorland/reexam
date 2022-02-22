import React from 'react'
import { Button, Form, Dropdown, DropdownButton } from "react-bootstrap"
import Parse from "parse/dist/parse.min.js"
import { useState } from "react"


const CancelBtn = ({ drive, cancelRide}) => {
    const [isRequested, setIsRequested] = useState(false)
    const [requestDisable, setRequestDisable] = useState(false)
    const [cancelDisable, setCancelDisable] = useState(false)

    // const Drives = new Parse.Object.extend("Drives")
    // const query = new Parse.Query(Drives)

    function handleClick(id) {
        cancelRide(id)
        setRequestDisable(cancelDisable => !cancelDisable)
    }

    return (
        <Button disabled={requestDisable} onClick={()=> handleClick(drive.id)}>
            Cancel
        </Button>
    )
}

export default CancelBtn;