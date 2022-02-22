import React from "react";
import InfoWrite from "../components/ExcursionInfo/InfoWrite";
import InfoRead from "../components/ExcursionInfo/InfoRead";
import ExcursionSignUp from "../components/ExcursionSignUp/ExcursionSignup";
import Parse from "parse/dist/parse.min.js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Excursion() {
  const currentUser = Parse.User.current(); //get current user
  const username = currentUser.get("username");

  const [isExcursion, setIsExcursion] = useState(false)
  const getExcursion = async () => {
    const Excursion = Parse.Object.extend("Excursion"); //to se if there is a excursion already in db.
    const query = new Parse.Query(Excursion);
    const res = await query.find();

    if (res) {
        setIsExcursion(true)
    }
  }
  
  useEffect(() => {
    getExcursion();
  }, []);

  return (
    <div className="excursion">
      {username === "admin" && isExcursion === false && <InfoWrite />}
      {username === "admin" && isExcursion === true && <InfoRead />}
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
