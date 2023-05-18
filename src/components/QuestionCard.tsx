import React from "react";
//types import
import { AnswerQuiz } from "../App";
import { QuizBox } from "../App.styles";

type Parameters = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerQuiz | undefined;
  questionNr: number;
  totalQuestions: number;
};
const QuestionCard: React.FC<Parameters> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <QuizBox>
      <p className="number">
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <div key={answer}>
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </QuizBox>
  );
};

export default QuestionCard;
