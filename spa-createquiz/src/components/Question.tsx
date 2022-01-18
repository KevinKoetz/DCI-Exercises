import React, { useContext, useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { QuizContext } from "../Quiz";
import StatusBar from "./StatusBar";
import SyntaxHighlighter from "react-syntax-highlighter";

function Question() {
  const { state, dispatch } = useContext(QuizContext);
  const { id } = useParams();
  const question = state.questions.find((question) => question.uuid === id);
  const [checkedAnswers, setCheckedAnswers] = useState<number[]>([]);
  const navigate = useNavigate()

  useEffect(()=>{
    const answer = state.answers.find((answer) => answer.questionId === id)
    if(answer){ setCheckedAnswers(answer.selectedAnswers)}else {
      setCheckedAnswers([])
    }
  }, [id, state.answers])

  if (!question || !id) {
    return <Navigate to="/not-found" />;
  }

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    if(e.target.checked) {
      setCheckedAnswers((checkedAnswers)=>[...checkedAnswers, index])
    }else {
      setCheckedAnswers((checkedAnswers)=>{
        const i = checkedAnswers.indexOf(index)
        const newCheckedAnswers = [...checkedAnswers]
        newCheckedAnswers.splice(i, 1);
        return newCheckedAnswers
      })
    }
  }

  const handleSubmit = () => {
    dispatch({type: "answer", payload: {questionId: id, selectedAnswers: checkedAnswers}});
    const questionIndex = state.questions.indexOf(question)
    if(questionIndex < state.questions.length - 1) {
      navigate(`/question/${state.questions[questionIndex+1].uuid}`)
    }else(
      navigate("/result")
    )
  }

  return (
    <div className="Question">
      <StatusBar />
      <h2>{question.question}</h2>
      {question.code && (
        <SyntaxHighlighter language={question.language}>
          {question.code}
        </SyntaxHighlighter>
      )}
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index}>
            <input type="checkbox" onChange={(e) => handleAnswerChange(e, index)} checked={checkedAnswers.includes(index)}/>
            {answer.text}
          </li>
        ))}
      </ul>
      <input type="button" value="Submit" onClick={handleSubmit} />
    </div>
  );
}

export default Question;
