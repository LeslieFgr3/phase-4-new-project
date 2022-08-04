import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ currentUser, updateUser }) => {
  const handleLogOut = () => {
    fetch("/logout", {
      method: "DELETE",
    }).then((res) => {
      if (res.ok) {
        updateUser(null);
      }
    });
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
        {currentUser ? (
          <button onClick={handleLogOut}>Log Out</button>
        ) : (
          <NavLink to="/signIn">
            <button>My Account</button>
          </NavLink>
        )}
      </li>
    </ul>
  );
};
export default Navbar;
