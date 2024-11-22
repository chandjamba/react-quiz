import { useEffect, useState } from "react";

const url =
  "https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple";

export default function Home() {
  // Use use-state hook for set state of questions. //
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [questionNumber, setQuestionNumber] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  async function fetchQuestions() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.results);
    
    setCurrentQuestion(data?.results?.[0]?.question);
    const options = [
      ...data?.results?.[0]?.incorrect_answers,
      data?.results?.[0]?.correct_answer,
    ];
    const randomOptions = options?.sort();
    setAnswers(randomOptions);
    setCorrectAnswer(data?.results?.[0]?.correct_answer);
    setQuestionNumber(questionNumber + 1);
  }
  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className="home">
      <h1>Welcome</h1>
      <p>Here you can test your general knowledge.</p>
      <div className="container">
        <div className="question-section">
          <div className="question-count">
            <div className="question-count-digit">{questionNumber}.</div>
          </div>
          <div className="question-display">{currentQuestion}</div>
        </div>
        <div className="answer-section">
          {answers.map((answer) => {
            const isCorrectAnswer = answer === correctAnswer;
            const isCurrentAnswerSelected = answer === selectedAnswer;
            console.log(answer);
            return (
              <button
                key={answer}
                onClick={() => {
                  setSelectedAnswer(answer);
                  setTimeout(() => {
                    fetchQuestions();
                  }, 2000);
                }}
                className={`answer-btn ${
                  showAnswer && isCorrectAnswer
                    ? "green-btn"
                    : isCorrectAnswer && isCurrentAnswerSelected
                    ? "green-btn"
                    : isCurrentAnswerSelected && !isCorrectAnswer
                    ? "red-btn"
                    : ""
                }`}
              >
                {answer}
              </button>
            );
          })}
        </div>
        <div className="horizontal_line"></div>
      </div>
      <div className="container2">
        <button
          className="next-btn"
          onClick={() => {
            fetchQuestions();
            setShowAnswer(false);
          }}
        >
          Next
        </button>
        <button className="show-answer-btn" onClick={() => setShowAnswer(true)}>
          Show Answer
        </button>
      </div>
    </div>
  );
}
