import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  console.log(currentUser);

  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          updateUser(user);
        });
      }
    });
  }, []);

  const updateUser = (user) => setCurrentUser(user);

  return (
    <div className="App">
      <header>
        <Nav currentUser={currentUser} updateUser={updateUser} />
      </header>
      <Switch>
        <Route path="/signup">
          <Signup updateUser={updateUser} />
        </Route>
        <Route path="/signIn">
          <Login updateUser={updateUser} />
        </Route>
        <Route path="/">
          <MainPage currentUser={currentUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
