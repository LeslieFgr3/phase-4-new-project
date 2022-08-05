import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "semantic-ui-react";

function Login({ updateUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => updateUser(user));
        history.push("/");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  function onClick() {
    history.push("/signup");
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group widths="equal">
        <label className="usernameLabel" htmlFor="Username">
          Username
        </label>
        <Form.Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <Form.Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button variant="fill" color="primary" type="submit">
          {"Login"}
        </button>
        <button
          className="signupButton"
          variant="fill"
          color="primary"
          onClick={onClick}
          type="submit"
        >
          {"Sign Up"}
        </button>
      </Form.Group>
    </Form>
  );
}
export default Login;
