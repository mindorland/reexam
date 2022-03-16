import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "../../OurStyle.css";

const AcceptBtn = ({ request, requestAccept }) => {
  const [acceptDisable, setAcceptDisable] = useState(false);

  function handleClick(id) {
    requestAccept(id);
    setAcceptDisable((acceptDisable) => !acceptDisable);
  }

  return (
    <>
      <Button disabled={acceptDisable} onClick={() => handleClick(request.id)}>
        Accept
      </Button>
    </>
  );
};

export default AcceptBtn;
