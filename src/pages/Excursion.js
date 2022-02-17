import React from "react";
import InfoWrite from "../components/ExcursionInfo/InfoWrite";
import InfoRead from "../components/ExcursionInfo/InfoRead";
import Parse from "parse/dist/parse.min.js";
import { useNavigate } from "react-router";

function Excursion() {
  return (
    <div className="excursion">
      <InfoRead />
    </div>
  );
}

export default Excursion;
