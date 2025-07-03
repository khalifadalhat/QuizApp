import React, { useContext } from "react";
import { QuizContext } from "../Helpers/context";
import { Button, Card } from "react-bootstrap";

export default function Home() {
  const { setInitial } = useContext(QuizContext);

  return (
    <div className="home-screen text-center">
      <Card className="home-card">
        <Card.Body>
          <Card.Title className="mb-4">Welcome to the Quiz!</Card.Title>
          <Card.Text className="mb-4">
            Test your knowledge with our interactive quiz. You'll have a lot of
            questions to answer.
          </Card.Text>
          <Button
            variant="primary"
            size="lg"
            onClick={() => setInitial("quiz")}
            className="start-btn"
          >
            Start Quiz
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
