import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button, Segment } from "semantic-ui-react";

function SignUp({ updateUser }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const { username, password } = formData;

  function onSubmit(e) {
    e.preventDefault();
    const user = {
      username,
      password,
    };
    fetch(`/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          history.push(`/users/${user.id}`);
          updateUser(user);
          console.log(user);
        });
      } else {
        res.json().then((json) => setErrors(Object.entries(json.errors)));
      }
    });
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <Segment>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <label>Username</label>
          <Form.Input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <br />
        </Form.Group>
        <Form.Group>
          <label>Password</label>
          <Form.Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="fill" primary type="submit">
          Sign Up
        </Button>
      </Form>
      {errors ? errors.map((e) => <div>{e[0] + ": " + e[1]}</div>) : null}
    </Segment>
  );
}
export default SignUp;
