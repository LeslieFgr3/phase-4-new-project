import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [errors, setErrors] = useState(false);

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

  if (errors) return <h1>{errors}</h1>;

  return (
    <div className="App">
      <header>
        <Nav currentUser={currentUser} />
      </header>
      <BrowserRouter>
        <Switch>
          <Route path="/users/new">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
