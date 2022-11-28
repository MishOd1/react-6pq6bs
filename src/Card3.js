import React, { useState } from "react";
import "./Card3.css";
import YoutubeEmbed from './Youtube.js'
function Card3() {
  
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Only _____ Can Extart (Mine) Bitcoin",
      options: [
        { id: 0, text: "Goverments", isCorrect: false },
        { id: 1, text: "Banks", isCorrect: false },
        { id: 2, text: "Bitcoin Founder", isCorrect: false },
        { id: 3, text: "Anyone", isCorrect: true },
      ],
    },
    {
      text: "What Type Of Equipment Is Used In Bitcoin Mining?",
      options: [
        { id: 0, text: "Super Computers", isCorrect: true },
        { id: 1, text: "Coal Mining Equipment", isCorrect: false },
        { id: 2, text: "Gold Mining Equipment", isCorrect: false },
        { id: 3, text: "Crude Oil Extraction Equipment", isCorrect: false },
      ],
    },
    {
      text: "What Physical Shape Does Bitcoin Have?",
      options: [
        { id: 0, text: "Paper Money", isCorrect: false },
        { id: 1, text: "Precious Metal", isCorrect: false },
        { id: 2, text: "Its Digital Money (No Physical Form)", isCorrect: true },
        { id: 3, text: "Flash Drive", isCorrect: false },
      ],
    },
    {
      text: "Bitcoin Has A Backup Of 100Tons Of Gold Saved In",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Bitcoin Is Not Backedup By Gold Or Paper Money", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "To Send A Bitcoin To Another Person, You Have To..",
      options: [
        { id: 0, text: "Ask The Bank To Send", isCorrect: false },
        { id: 1, text: "Send Directly (peer-to-peer)", isCorrect: true },
        { id: 2, text: "Send Throw Paypal", isCorrect: true },
        { id: 3, text: "Deliver It By Hand", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      <div className="welcome">
        <h1 className="Welcome">Weclome to the Bitcoin quiz</h1><br></br>
        <h2 className="below">below, you will find a video.. please play that 1 minute video<br></br>
        then procced to the 5 qustion quiz below it and answer all the qustions.. 
        </h2>
        <p className="par">
          after you answer all the qustions<br></br>
          you will get back a result, the result contains how many qustions you got right and your percenatge %<br></br>
          and below your result, you will find a restart button marked in red, if you wish to re-take this exam, good luck!
        </p>




      </div>
      <YoutubeEmbed embedId="wrPklp6PIew" />
      {/* 1. Header  */}
      <h1>USA Quiz 🇺🇸</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul className="Hi">
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  className="hello"
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Card3;