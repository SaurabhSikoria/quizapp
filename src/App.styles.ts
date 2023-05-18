import styled, { createGlobalStyle } from "styled-components";

import BGImage from "./images/quizBack.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body{
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: red;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Fascinate Impact, Haettenschweiler, "Arial Narrow Bold",
      sans-serif;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 20px;
  }

  > button {
    padding: 1.2rem 2rem;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgb(158, 235, 253);
  }
`;

export const QuizBox = styled.div`
  background-color: rgb(158, 235, 253);
  height: 50%;
  width: 100%;
  padding: 4rem;
  border-radius: 10px;
  margin: 1rem;

  p {
    font-size: 1.3rem;
    font-weight: 500;
  }

  button {
    padding: 0.4rem 0.8rem;
    border-radius: 30px;
    cursor: pointer;
    background-color: #01f1ff;
    margin: 0.6rem;
  }
`;
