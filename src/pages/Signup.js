import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Parse from "parse/dist/parse.min.js";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "../components/CSS/Buttons.css";
import "../App.css";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  async function createAccount() {
    const user = new Parse.User();
    user.setUsername(username);
    user.setPassword(password);
    user.set("name", name);
    user.setEmail(email);

    try {
      await user.signUp();
    } catch (error) {
      alert("Error: " + error.message);
    }
    navigate("/excursion");
  }

  function usernameChange(e) {
    setUsername(e.target.value);
  }
  function passwordChange(e) {
    setPassword(e.target.value);
  }

  function nameChange(e) {
    setName(e.target.value);
  }

  function emailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div className="pageContent">
      <div className="login-container">
        <h1 className="header">Sign Up</h1>
        <Form>
          <div classname="login-cointainer">
            <Form.Group className="mb-3" controlId="formBasicUsrname">
              <p className="emph-body">
                Username
                <Form.Control
                  className="narrow-textfield"
                  onChange={usernameChange}
                  type="text"
                  placeholder="Enter username"
                  autoFocus
                />
              </p>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="narrow-textfield"
                type="password"
                placeholder="Password"
                onChange={passwordChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className="narrow-textfield"
                type="text"
                placeholder="Enter full name"
                onChange={nameChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="narrow-textfield"
                onChange={emailChange}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Button className="primary-button" onClick={createAccount}>
              create account
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
