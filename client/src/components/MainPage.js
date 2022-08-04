import React, { useState } from "react";
import DiaryPage from "./DiaryPage";

function MainPage({ currentUser, updateFeeling }) {
  const [feeling, setFeeling] = useState("");
  const [quote, setQuote] = useState([]);
  // const [currentUser, setCurrentUser] = useState(false);
  console.log(feeling);

  function onChange(e) {
    // const { name, value } = e.target;
    setFeeling(e.target.value);
  }

  const getData = () =>
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        const RandomNumber = Math.floor(Math.random() * 100) + 1;
        const selectedQuote = data[RandomNumber];
        setQuote(selectedQuote);
      });

  function onClick(e) {
    e.preventDefault();
    getData();
    currentUser ? updateFeeling(feeling) : alert("Try more? Please Login");
  }

  // const updateUser

  return (
    <>
      <div className="search">
        <input
          type="text"
          name="feeling"
          className="searchTerm"
          placeholder="How are you feeling today?"
          onChange={onChange}
        />
        <button type="submit" className="searchButton" onClick={onClick}>
          <i className="fa fa-search"></i>
        </button>
        <br />
        <div>
          <h1>{quote.text}</h1>
        </div>
        <div>
          <h2>{quote.author}</h2>
        </div>
      </div>
      <div>
        <DiaryPage />
      </div>
    </>
  );
}

export default MainPage;
