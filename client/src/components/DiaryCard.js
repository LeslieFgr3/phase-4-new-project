import React from "react";
import { Card } from "semantic-ui-react";

function DiaryCard({ card }) {
  const { feeling, content, writer, created_at } = card;
  const date = created_at.slice(0, 10);
  console.log(date);

  return (
    <Card color="blue">
      <Card.Content className="card-container">
        <Card.Header className="card-date"> {date}</Card.Header>
        <Card.Description className="card-feeling">
          I am {feeling}
        </Card.Description>
        <Card.Description className="card-quote">{content}</Card.Description>
        <Card.Meta className="card-author">{writer}</Card.Meta>
      </Card.Content>
    </Card>
  );
}

export default DiaryCard;
