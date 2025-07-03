import React, { useState, useContext } from "react";
import { Questions } from "../Helpers/questions";
import { QuizContext } from "../Helpers/context";
import { Button, Card, ProgressBar, Alert } from "react-bootstrap";

export default function Quiz() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const { score, setScore, setInitial } = useContext(QuizContext);

  const checkAnswer = (option) => {
    setOptionChosen(option);
    const correct = Questions[currQuestion].answer === option;
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setShowFeedback(false);
    setCurrQuestion(currQuestion + 1);
  };

  const endQuiz = () => {
    setInitial("endquiz");
  };

  const progress = ((currQuestion + 1) / Questions.length) * 100;

  return (
    <div className="quiz-screen">
      <Card className="quiz-card">
        <Card.Body>
          <div className="d-flex justify-content-between mb-3">
            <span>
              Question {currQuestion + 1}/{Questions.length}
            </span>
            <span>Score: {score}</span>
          </div>

          <ProgressBar now={progress} className="mb-4" />

          <Card.Title className="mb-4">
            {Questions[currQuestion].question}
          </Card.Title>

          <div className="options-grid">
            {["a", "b", "c", "d"].map((option) => (
              <Button
                key={option}
                variant={
                  optionChosen === option
                    ? isCorrect
                      ? "success"
                      : "danger"
                    : "outline-primary"
                }
                onClick={() => !showFeedback && checkAnswer(option)}
                disabled={showFeedback}
                className="option-btn"
              >
                {Questions[currQuestion][option]}
              </Button>
            ))}
          </div>

          {showFeedback && (
            <Alert variant={isCorrect ? "success" : "danger"} className="mt-3">
              {isCorrect
                ? "Correct!"
                : `Incorrect! The correct answer is: ${
                    Questions[currQuestion][Questions[currQuestion].answer]
                  }`}
            </Alert>
          )}

          <div className="mt-4">
            {currQuestion === Questions.length - 1 ? (
              <Button
                variant="primary"
                onClick={endQuiz}
                disabled={!showFeedback}
              >
                See Results
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={nextQuestion}
                disabled={!showFeedback}
              >
                Next Question
              </Button>
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
