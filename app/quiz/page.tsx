/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { ReactNode, useState } from "react";
import { quiz } from "./data";

const Page = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [checked, setChecked] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  // select and check answer
  const onAnswerSelected = (answer: string, index: number) => {
    setChecked(true);
    setSelectedAnswerIndex(index);
    setSelectedAnswer(answer);
  };

  return (
    <div className="container">
      <h1>Quiz Page</h1>
      <div>
        <h2>
          Question: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className="quiz-container">
            <h3>{questions[activeQuestion].question}</h3>
            <ul>
              {answers.map((answer, index) => (
                <li 
                  key={index}
                  onClick={() => onAnswerSelected(answer, index)}
                  className={selectedAnswerIndex === index ? 'li-selected' : 'li-hover'}
                >
                  <span>{answer}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="quiz-container"></div>
        )}
      </div>
    </div>
  );
};

export default Page;