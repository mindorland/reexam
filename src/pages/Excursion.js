import React from "react";
import InfoWrite from "../components/ExcursionInfo/InfoWrite";
import InfoRead from "../components/ExcursionInfo/InfoRead";
import ExcursionSignUp from "../components/ExcursionSignUp/ExcursionSignup";
import Parse from "parse/dist/parse.min.js";
import { useNavigate } from "react-router";

function Excursion() {
  const currentUser = Parse.User.current(); //get current user
  const username = currentUser.get("username");

  return (
    <div className="excursion">
      {username === "admin" && <InfoWrite />}
      {username !== "admin" && (
        <>
          <InfoRead />
          <ExcursionSignUp />
        </>
      )}
    </div>
  );
}

export default Excursion;
