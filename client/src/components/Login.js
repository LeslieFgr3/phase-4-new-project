import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
    <form onSubmit={handleSubmit}>
      <label className="usernameLabel" htmlFor="Username">
        Username
      </label>
      <input
        type="text"
        id="username"
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
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
        {"sign up"}
      </button>
    </form>
  );
}
export default Login;
