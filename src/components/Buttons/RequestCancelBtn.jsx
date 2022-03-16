import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";
import "../../OurStyle.css";

const RequestCancelBtn = ({ drive, requestRide, cancelRide }) => {
  const [isRequested, setIsRequested] = useState(false);
  const [requestDisable, setRequestDisable] = useState(false);
  const [cancelDisable, setCancelDisable] = useState(true);

  function handleRequestClick(id) {
    requestRide(id);
    setRequestDisable((requestDisable) => !requestDisable);
    setCancelDisable((cancelDisable) => !cancelDisable);
  }

  function handleCancelClick(id) {
    cancelRide(id);
    setCancelDisable((cancelDisable) => !cancelDisable);
    setRequestDisable((requestDisable) => !requestDisable);
  }

  return (
    <div className="flex-parent jc-center">
      <Button
        className="primary-button picture-margin"
        disabled={requestDisable}
        onClick={() => handleRequestClick(drive.id)}
      >
        Request
      </Button>
      <Button
        className="cancel-button picture-margin"
        disabled={cancelDisable}
        onClick={() => handleCancelClick(drive.id)}
      >
        Cancel
      </Button>
    </div>
  );
};

export default RequestCancelBtn;
