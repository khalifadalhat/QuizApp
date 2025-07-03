import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import EndQuiz from "./components/EndQuiz";
import { QuizContext } from "./Helpers/context";
import { Container } from "react-bootstrap";

function App() {
  const [initial, setInitial] = useState("home");
  const [score, setScore] = useState(0);

  return (
    <Container fluid className="app-container">
      <QuizContext.Provider value={{ initial, setInitial, score, setScore }}>
        {initial === "home" && <Home />}
        {initial === "quiz" && <Quiz />}
        {initial === "endquiz" && <EndQuiz />}
      </QuizContext.Provider>
    </Container>
  );
}

export default App;
