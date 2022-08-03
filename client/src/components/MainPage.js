import React, { useState } from "react";

function MainPage({ currentUser }) {
  const [feeling, setFeeling] = useState("");
  const [quote, setQuote] = useState([]);
  // const [currentUser, setCurrentUser] = useState(false);
  console.log(feeling);
  function onChange(e) {
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

  const createData = (input) => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  function onClick(e) {
    e.preventDefault();
    if 
    getData();
    createData(quote);
  }

  // const updateUser

  return (
    <div className="search">
      <input
        type="text"
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
  );
}

export default MainPage;
