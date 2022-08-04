import React from "react";
import { useHistory, NavLink } from "react-router-dom";

const Navbar = ({ updateUser }) => {
  const history = useHistory();
  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        updateUser(null);
        history.push("/");
      }
    });
  };

  const handleLogIn = () => {
    history.push("/signin");
  };

  return (
    <ul className="nav-list">
      <li className="nav-item">NAME</li>
      <li className="nav-item">
        <NavLink exact to="/">
          <button>Home</button>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/signIn">
          <button onClick={handleLogIn}>Log In</button>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/">
          <button onClick={handleLogOut}>Log Out</button>
        </NavLink>
      </li>
    </ul>
  );
};
export default Navbar;
