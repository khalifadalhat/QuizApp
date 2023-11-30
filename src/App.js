import {useState} from 'react';
import './App.css';
import Home from './components/Home';
import Quiz from './components/Quiz';
import EndQuiz from './components/EndQuiz';
import { QuizContext } from './Helpers/context';


function App() {
  const [initial, setInitial] = useState("home");
  const [score, setScore] = useState(0)
  return (
    <div className='App'>
      <h1>Quiz app</h1>
      <QuizContext.Provider value={{initial, setInitial, score, setScore}}>
      {initial === "home" && <Home />}
      {initial === "quiz" && <Quiz />}
      {initial === "endquiz" && <EndQuiz />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
