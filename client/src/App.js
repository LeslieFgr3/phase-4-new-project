import "./App.css";
import Nav from "./components/Nav";
import MainPage from "./components/MainPage";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <MainPage />
    </div>
  );
}

export default App;
