import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import DiaryPage from "./DiaryPage";
import { Button } from "semantic-ui-react";

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
  const [trigger, setTrigger] = useState(false);

  function onChange(e) {
    const { name, value } = e.target;
    setFeeling({ ...feeling, [name]: value });
  }

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => prev + 1);
      console.log(counter);
      if (counter === 5) return () => clearInterval(interval);
    }, 1000);
  }, []);

  console.log(counter);

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
    setTrigger(!trigger);
  }

  return (
    <>
      {counter >= 2 ? (
        <p className="send">Hey There! How are you feeling today?</p>
      ) : null}
      {counter >= 4 ? (
        <div className="search">
          <input
            type="text"
            name="feeling"
            className="searchTerm"
            placeholder="How are you feeling today?"
            onChange={onChange}
          />
          <Button primary type="submit" className="B" onClick={onClick}>
            <i className="fa fa-search"></i>
          </Button>
        </div>
      ) : null}
      {trigger ? (
        <>
          <p className="send">You are {feeling.feeling}, today!!</p>
          <p className="send">Let me tell you what!</p>
          <p className="send">
            {quote.author ? quote.author : "Someone"} says ...
          </p>
          <p className="send">
            <strong>"</strong> {quote.text}
            <strong>"</strong>
          </p>
        </>
      ) : null}
      {currentUser === null ? null : (
        <>
          <h3>Welcome {currentUser.username}</h3>
          <Button primary onClick={handleClick}>
            My Diary Page
          </Button>{" "}
        </>
      )}
      {toggle && currentUser ? (
        <DiaryPage currentUser={currentUser} />
      ) : (
        history.push("/")
      )}
    </>
  );
}

export default MainPage;
