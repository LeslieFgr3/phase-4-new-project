import React from "react";
import { Card } from "semantic-ui-react";

function DiaryCard({ card }) {
  const { feeling, content, writer, created_at } = card;
  const date = created_at.slice(0, 10);
  console.log(date);

  return (
    <Card color="blue">
      <div className="card-container">
        <div className="card-date">Date: {date}</div>
        <div className="card-feeling">{feeling}</div>
        <div className="card-quote">{content}</div>
        <div className="card-author">{writer}</div>
      </div>
    </Card>
  );
}

export default DiaryCard;
