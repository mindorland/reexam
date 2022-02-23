import React from 'react'
import { Button, Form, Dropdown, DropdownButton } from "react-bootstrap"
import Parse from "parse/dist/parse.min.js"
import { useState } from "react"


const AcceptBtn = ({ request, requestAccept}) => {
    const [acceptDisable, setAcceptDisable] = useState(false)

    function handleClick(id) {
        requestAccept(id)
        setAcceptDisable(acceptDisable => !acceptDisable)
    }

    return (
        <>
            <Button disabled={acceptDisable} onClick={()=> handleClick(request.id)}>
                Accept
            </Button>
        </>
    )
}

export default AcceptBtn;