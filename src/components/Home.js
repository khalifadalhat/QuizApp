import React, { useContext } from "react";
import { QuizContext } from "../Helpers/context";
import '../App.css';

export default function Home() {
  const { setInitial } = useContext(QuizContext);

  const handleChange = () => {
    setInitial("quiz");
  };
  return (
    <div className="Menu">
      <button onClick={handleChange}>Start Quiz</button>
    </div>
  );
}
