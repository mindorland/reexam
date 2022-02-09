import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import Parse from "parse/dist/parse.min.js"
import { useNavigate } from "react-router-dom"

export default function SignUp() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const navigate = useNavigate()

  async function createAccount() {
    const user = new Parse.User()
    user.setUsername(username)
    user.setPassword(password)
    user.set("name", name)
    user.setEmail(email)

    try {
      await user.signUp()
    } catch (error) {
      alert("Error: " + error.message)
    }
    navigate("/excursion")
  }

  function usernameChange(e) {
    setUsername(e.target.value)
  }
  function passwordChange(e) {
    setPassword(e.target.value)
  }

  function nameChange(e) {
    setName(e.target.value)
  }

  function emailChange(e) {
    setEmail(e.target.value)
  }

  return (
    <div className="pageContent">
      <h1>Sign Up</h1>

      <Form.Group className="mb-3" controlId="formBasicUsrname">
        <Form.Label>Username</Form.Label>
        <Form.Control
          onChange={usernameChange}
          type="text"
          placeholder="Enter username"
          autoFocus
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={passwordChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter full name" onChange={nameChange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={emailChange} type="email" placeholder="Enter email" />
      </Form.Group>

      <Button variant="primary" onClick={createAccount}>
        Create Account
      </Button>
    </div>
  )
}
