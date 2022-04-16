
import React, { useState } from "react";
import "./Quiz.css";
import Data from "../../../data/Quz.json"
import { showData } from "../../../actions";
import {useDispatch} from 'react-redux';
// import Home from "../Home/Home";
export default function Quiz(props) {
 
const dispatch = useDispatch();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Data.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="quiz" >
    <span className="subtitle">Welcome  </span>
  
    
    <div className="app">
      {showScore ? (
        <div className="score-section">

          <div className>
          You scored {score} out of {Data.questions.length}</div>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{Data.questions.length}
            </div>
            <div className="question-text">
              {Data.questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {Data.questions[currentQuestion].answerOptions.map((answerOption) => (
              console.log(answerOption),
              <button 
              onChange={() => dispatch(showData(currentQuestion))}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
      
    </div>
  
    </div>
  );
}
