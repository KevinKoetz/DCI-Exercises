import React, { createContext, useEffect, useReducer } from "react";
import "./Quiz.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Question from "./components/Question";
import { IQuestion, questions } from "./questions";
import Error404 from "./components/Error404";
import Result from "./components/Result";

const initialState: IQuizState = {
  questions: Object.values(questions),
  answers: [],
};

type Action = { type: "answer"; payload: IAnswer };

interface IQuizState {
  questions: IQuestion[];
  answers: IAnswer[];
}

interface IAnswer {
  questionId: string;
  selectedAnswers: number[];
}

interface IContext {
  state: IQuizState;
  dispatch: React.Dispatch<Action>;
}

export const QuizContext = createContext<IContext>({
  state: initialState,
  dispatch: () => {},
});

const reducer: React.Reducer<IQuizState, Action> = (state, action) => {
  switch (action.type) {
    case "answer":
      const answerIndex = state.answers.findIndex(
        (answer) => answer.questionId === action.payload.questionId
      );
      if (answerIndex !== -1) {
        return {
          ...state,
          answers: state.answers.map((answer, index) =>
            index === answerIndex ? { ...answer, selectedAnswers: action.payload.selectedAnswers} : answer
          ),
        };
      }
      return { ...state, answers: [...state.answers, action.payload] };
    default:
      return state;
  }
};

export const calculateScore = (state: IQuizState) => {
  let numberOfCorrectQuestions = 0;  
  state.questions.forEach((question) => {
    const answer = state.answers.find(answer => answer.questionId === question.uuid )
    if(!answer) return;
    if(question.solutions.length !== answer.selectedAnswers.length) return;
    for (const solution of question.solutions) {
      if(!answer.selectedAnswers.includes(solution)) return
    }
    numberOfCorrectQuestions++;
  })
  return numberOfCorrectQuestions * 100 / state.questions.length
}

function Quiz() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <div className="Quiz">
      <QuizContext.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <h1>My little Quiz</h1>
          <p>Check your knowledge!</p>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/question/:id" element={<Question />} />
            <Route path="/result" element={<Result />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </QuizContext.Provider>
    </div>
  );
}

export default Quiz;
