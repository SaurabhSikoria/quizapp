import { shufflingArray } from "./utils";

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export type singleQuestion = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type questionStatus = singleQuestion & {
  answers: string[];
};

export const fetchQuiz = async (amount: number, difficulty: Difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=18&difficulty=${difficulty}&type=multiple`;

  const data = await (await fetch(endpoint)).json();
  console.log(data);

  return data.results.map((question: singleQuestion) => ({
    ...question,
    answers: shufflingArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
