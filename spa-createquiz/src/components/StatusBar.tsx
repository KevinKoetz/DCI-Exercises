import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { calculateScore, QuizContext } from "../Quiz";

function StatusBar() {
  const { id } = useParams();
  const { state } = useContext(QuizContext);
  const questionIndex = state.questions.findIndex(
    (question) => question.uuid === id
  );
  return (
    <div className="StatusBar">
      <div>
        <span>
          Question {questionIndex + 1} / {state.questions.length}
        </span>
        <span>Score: {calculateScore(state)}/100</span>
      </div>
      <hr />
    </div>
  );
}

export default StatusBar;
