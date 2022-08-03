import React from "react";

const Navbar = ({ currentUser }) => {
  return (
    <ul className="nav-list">
      <li>NAME</li>
      <li>
        <link to="/" /> Home
      </li>
      {currentUser ? (
        <li>
          <link to="/login" /> Log Out
        </li>
      ) : (
        <li>
          <link to="/login" /> My Account
        </li>
      )}
    </ul>
  );
};
export default Navbar;
