import React, { useState, useContext } from "react";
import { Questions } from "../Helpers/questions";
import { QuizContext } from "../Helpers/context";

export default function Quiz() {
  const [currQuestion, setCurrQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, setInitial } = useContext(QuizContext);

  const nextQuestion = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrQuestion(currQuestion + 1);
  };
  const endQuiz = () => {
    if (Questions[currQuestion].answer === optionChosen) {
      setInitial(score + 1);
    }
    setInitial("endquiz");
  };
  return (
    <div className="Quiz">
      <h1>{Questions[currQuestion].question}</h1>
      <div className="Options">
        <button onClick={() => setOptionChosen("a")}>
          {Questions[currQuestion].a}
        </button>
        <button onClick={() => setOptionChosen("b")}>
          {Questions[currQuestion].b}
        </button>
        <button onClick={() => setOptionChosen("c")}>
          {Questions[currQuestion].c}
        </button>
        <button onClick={() => setOptionChosen("d")}>
          {Questions[currQuestion].d}
        </button>
      </div>
      {currQuestion === Questions.length - 1 ? (
        <button onClick={endQuiz}>End Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
}
