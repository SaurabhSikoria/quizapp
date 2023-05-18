import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuiz, questionStatus, Difficulty } from "./API";
//CSS
import { GlobalStyle, Wrapper } from "./App.styles";

export type AnswerQuiz = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App = () => {
  const TOTAL_QUESTIONS = 10;

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<questionStatus[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerQuiz[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(questions);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestion = await fetchQuiz(TOTAL_QUESTIONS, Difficulty.EASY);

    setQuestions(newQuestion);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswers = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      //checking
      const check = questions[number].correct_answer === answer;
      // setting score
      if (check) setScore((prev) => prev + 1);

      const AnswerQuiz = {
        question: questions[number].question,
        answer,
        correct: check,
        correctAnswer: questions[number].correct_answer,
      };

      setUserAnswers((prev) => [...prev, AnswerQuiz]);
    }
  };

  const nextQuestion = () => {
    const nextOne = number + 1;
    if (nextOne === TOTAL_QUESTIONS) setGameOver(true);
    else setNumber(nextOne);
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <h1>REACT QUIZ</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startQuiz}>
            Start
          </button>
        ) : null}
        {!gameOver && !loading && <p className="score">Score: {score}</p>}
        {loading && <p>Loading Questions ...</p>}
        {!gameOver && !loading && (
          <QuestionCard
            question={questions[number].question}
            totalQuestions={TOTAL_QUESTIONS}
            questionNr={number + 1}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswers}
          />
        )}
        {!gameOver &&
          !loading &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 && (
            <button className="next" onClick={nextQuestion}>
              Next Question
            </button>
          )}
      </Wrapper>
    </>
  );
};

export default App;
