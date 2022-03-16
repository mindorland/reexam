import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Parse from "parse/dist/parse.min.js";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../OurStyle.css";

export default function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  function handleLoginAttempt(e) {
    e.preventDefault();

    const user = new Parse.User();
    user.setPassword(password);
    user.setUsername(username);
    user.logIn().then((loggedInUser) => {
      navigate("/excursion");
    });
  }

  return (
    <div className="pageContent">
      <div className="login-container">
        <div>
          <h1 className="header">Login</h1>{" "}
        </div>{" "}
        <div>
          <Form className="login-form">
            <div classname="login-cointainer">
              <Form.Group controlId="formBasicUsername">
                <Form.Label className="emph-body">Username</Form.Label>
                <Form.Control
                  className="narrow-textfield"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  autoFocus
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label className="emph-body">Password</Form.Label>
                <Form.Control
                  className="narrow-textfield"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
              </Form.Group>
              <Button
                className="primary-button"
                onClick={handleLoginAttempt}
                type="submit"
              >
                login
              </Button>
              <p className="emph-body no-account">
                Don't have an account?
                <Link to="/signup"> Create one!</Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}
