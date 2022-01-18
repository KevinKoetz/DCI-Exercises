import React, { useContext } from "react";
import { calculateScore, QuizContext } from "../Quiz";
import SyntaxHighlighter from "react-syntax-highlighter";

function Result() {
  const { state } = useContext(QuizContext);
  return (
    <div className="Result">
      <h2>Your Score: {calculateScore(state)}/100</h2>
      <hr />
      {state.questions.map((question) => (
        <div>
          <h3>{question.question}</h3>
          {question.code && (
            <SyntaxHighlighter language={question.language}>
              {question.code}
            </SyntaxHighlighter>
          )}
          <ul>
            {question.answers.map((answer, index) => {
              const isChecked = state.answers
                .find((answer) => answer.questionId === question.uuid)
                ?.selectedAnswers.includes(index);

              const isSolution = question.solutions.includes(index);
              return (
                <li
                  key={index}
                  style={{
                    backgroundColor:
                      isSolution && isChecked
                        ? "green"
                        : isSolution || isChecked
                        ? "red"
                        : "transparent",
                  }}
                >
                  <input type="checkbox" checked={isChecked} disabled />
                  {answer.text}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Result;
