import React, { useContext } from "react";
import { QuizContext } from "../Helpers/context";
import { Questions } from "../Helpers/questions";
import '../App.css';

export default function EndQuiz() {
  const {score, setScore, setInitial} = useContext(QuizContext);

  const Restart = () => {
    setScore(0);
    setInitial("home")
  }

  return (
    <div className="endQuiz">
      <h1>Quiz End</h1>
      <h3>{score} / {Questions.length}</h3>
      <button onClick={Restart}>Restart Quiz</button>
    </div>
  )
}
