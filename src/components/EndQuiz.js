import React, { useContext } from "react";
import { QuizContext } from "../Helpers/context";
import { Questions } from "../Helpers/questions";
import { Button, Card, Alert } from "react-bootstrap";

export default function EndQuiz() {
  const { score, setScore, setInitial } = useContext(QuizContext);
  const percentage = Math.round((score / Questions.length) * 100);

  const Restart = () => {
    setScore(0);
    setInitial("home");
  };

  return (
    <div className="end-screen">
      <Card className="end-card">
        <Card.Body className="text-center">
          <Card.Title className="mb-4">Quiz Completed!</Card.Title>

          <div className="result-display mb-4">
            <div
              className={`result-circle ${
                percentage >= 70
                  ? "high-score"
                  : percentage >= 40
                  ? "medium-score"
                  : "low-score"
              }`}
            >
              <span>{percentage}%</span>
            </div>
            <p className="mt-3">
              You scored {score} out of {Questions.length}
            </p>
          </div>

          <Alert
            variant={
              percentage >= 70
                ? "success"
                : percentage >= 40
                ? "warning"
                : "danger"
            }
          >
            {percentage >= 70
              ? "Excellent work! You're a quiz master!"
              : percentage >= 40
              ? "Good effort! Keep practicing!"
              : "Keep trying! You'll get better!"}
          </Alert>

          <Button
            variant="primary"
            size="lg"
            onClick={Restart}
            className="restart-btn"
          >
            Try Again
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
