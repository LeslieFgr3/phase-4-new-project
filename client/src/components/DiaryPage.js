import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import DiaryCard from "./DiaryCard";

function DiaryPage({ currentUser }) {
  const [diaryContent, setDiaryContent] = useState([]);

  useEffect(() => {
    fetch("/feelings")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((item) => item.user_id === currentUser.id);
        setDiaryContent(filtered);
      });
  }, []);
  console.log(diaryContent);

  const eachDiary = diaryContent.map((item) => (
    <DiaryCard key={item.id} card={item} />
  ));

  return <Card.Group itemsPerRow={5}>{eachDiary}</Card.Group>;
}

export default DiaryPage;
