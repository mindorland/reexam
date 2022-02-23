import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Parse from "parse/dist/parse.min.js";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import SingleParticipant from "./SingleParticipant";
import "/Users/kdawg/Documents/School/reexam/src/OurStyle.css";

export default function ExcursionSignup(props) {
  return (
    <div>
      <SingleParticipant />
    </div>
  );
}
