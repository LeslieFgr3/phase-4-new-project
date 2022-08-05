import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "semantic-ui-react";

const Navbar = ({ updateUser, currentUser }) => {
  const history = useHistory();
  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        updateUser(null);
        history.push("/");
      } else {
        updateUser(null);
      }
    });
  };

  const handleClick = () => {
    currentUser ? handleLogOut() : history.push("/signin");
  };

  return (
    <ul className="nav-list">
      <li className="nav-item">Day By Day</li>
      <li className="nav-item">
        <Button primary>Home</Button>
      </li>
      <li className="nav-item">
        <Button primary onClick={handleClick}>
          {currentUser ? "Log Out" : "Log In"}
        </Button>
      </li>
    </ul>
  );
};
export default Navbar;
