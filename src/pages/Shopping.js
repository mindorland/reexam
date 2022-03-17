import React from "react";
import "../OurStyle.css";
import Table from "../components/Table";
import DutyOverview from "../components/DutyOverview";
import Parse from "parse/dist/parse.min.js";
import { useEffect, useState } from "react";
function Shopping() {
  const currentUser = Parse.User.current(); //get current user
  const username = currentUser.get("username");

  const [isExcursion, setIsExcursion] = useState(false);
  const getExcursion = async () => {
    const Excursion = Parse.Object.extend("Excursion"); //to se if there is a excursion already in db.
    const query = new Parse.Query(Excursion);
    const res = await query.find();

    if (res.length > 0) {
      setIsExcursion(true);
    }
  };

  useEffect(() => {
    getExcursion();
  }, []);
  return (
    <div className="excursion">
      {username !== "admin" ? (
        <>
          <DutyOverview />
        </>
      ) : (
        <Table />
      )}
    </div>
  );
}

export default Shopping;
