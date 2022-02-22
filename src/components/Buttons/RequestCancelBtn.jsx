import React from 'react'
import { Button, Form, Dropdown, DropdownButton } from "react-bootstrap"
import Parse from "parse/dist/parse.min.js"
import { useState } from "react"


const RequestCancelBtn = ({ drive, requestRide, cancelRide}) => {
    const [isRequested, setIsRequested] = useState(false)
    const [requestDisable, setRequestDisable] = useState(false)
    const [cancelDisable, setCancelDisable] = useState(true)

    function handleRequestClick(id) {
        requestRide(id)
        setRequestDisable(requestDisable => !requestDisable)
        setCancelDisable(cancelDisable => !cancelDisable)
    }

    function handleCancelClick(id) {
        cancelRide(id)
        setCancelDisable(cancelDisable => !cancelDisable)
        setRequestDisable(requestDisable => !requestDisable)
    }

    return (
        <>
            <Button disabled={requestDisable} onClick={()=> handleRequestClick(drive.id)}>
                Request
            </Button>
            <Button disabled={cancelDisable} onClick={()=> handleCancelClick(drive.id)}>
                Cancel
            </Button>
        </>
    )
}

export default RequestCancelBtn;