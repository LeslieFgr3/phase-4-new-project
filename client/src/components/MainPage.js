import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import DiaryPage from "./DiaryPage";

function MainPage({ currentUser }) {
  const [feeling, setFeeling] = useState({
    feeling: "",
    content: "",
    writer: "",
    user_id: "",
  });
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });
  const [toggle, setToggle] = useState(false);
  const history = useHistory();

  function onChange(e) {
    const { name, value } = e.target;
    setFeeling({ ...feeling, [name]: value });
  }

  console.log(currentUser);

  const getQuote = () =>
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        const RandomNumber = Math.floor(Math.random() * 100) + 1;
        const selectedQuote = data[RandomNumber];
        setQuote(selectedQuote);
      });

  useEffect(() => {
    fetch("/quotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quote),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [quote]);

  const postFeelings = (feeling) => {
    fetch("/feelings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...feeling,
        content: quote.text,
        writer: quote.author,
        user_id: currentUser.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const handleClick = () => {
    setToggle(!toggle);
    setFeeling({
      feeling: feeling.feeling,
      content: quote.text,
      writer: quote.author,
    });
    postFeelings(feeling);
  };

  function onClick(e) {
    console.log(e);
    e.preventDefault();
    getQuote();
  }

  return (
    <>
      <p></p>
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
        {currentUser === null ? null : (
          <>
            <h3>Welcome {currentUser.username}</h3>
            <button onClick={handleClick}>My Diary Page</button>{" "}
          </>
        )}

        {toggle && currentUser ? (
          <DiaryPage currentUser={currentUser} />
        ) : (
          history.push("/")
        )}
      </div>
    </>
  );
}

export default MainPage;
