import React, { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "../context";
import "./style.css"

function Login() {

  const {users,currentUser,setCurrentUser} = useContext(Context);
  const [error, setError] = useState(false);
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e) => {
    e.preventDefault();
    let user = users.filter(
      (obj) => obj.email === email && obj.password === password
    );
    if (user.length > 0) {
      let logined=[...currentUser]
      console.log(user)
      logined.push({
        name:user[0].name,
        id:user[0].id,
        email:user[0].email
      })
      setCurrentUser(logined)
      console.log(logined)
      navigate("/");
    }
    setError(true);
  };

  return (
    <div>
      <h1 className="loginText">Login</h1>
      <Form className="form" onSubmit={submit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            required
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formError">
          {error ? (
            <>
              <Form.Label>Invalid Credentials</Form.Label>
            </>
          ) : (
            <></>
          )}
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
