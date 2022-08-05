import React from "react";
import { useHistory } from "react-router-dom";

const Navbar = ({ updateUser, currentUser }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState("")
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
      <li className="nav-item">NAME</li>
      <li className="nav-item">
        <button onClick={handleClick}>
          {currentUser ? "Log Out" : "Log In"}
        </button>
      </li>
    </ul>
  );
};
export default Navbar;
