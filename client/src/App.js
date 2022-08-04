import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Switch } from "react-router-dom";
import MainPage from "./components/MainPage";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  // const [errors, setErrors] = useState(false);
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

  // const updateFeeling = (feeling) => {
  //   console.log(feeling);
  //   fetch(`/users/${currentUser.id}`, {
  //     method: "PATCH",
  //     header: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ feeling: feeling }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // };

  const updateUser = (user) => setCurrentUser(user);

  // if (errors) return <h1>{errors}</h1>;

  return (
    <div className="App">
      <header>
        <Nav currentUser={currentUser} updateUser={updateUser} />
      </header>
      <Switch>
        <Route path="/signup">
          <Signup />
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
