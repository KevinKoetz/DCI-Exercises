import React, { useContext } from "react";
import { QuizContext } from "../Quiz";
import {Link} from "react-router-dom";

function Home() {
  const { state } = useContext(QuizContext);

  return (
    <div className="Home">
      <p>
        This is a quiz about HTML, CSS and JavaScript, that can be used to
        repeat all the basics that are needed in everyday's life of a web
        developer.
      </p>
      <p>Find out if you know all the details!</p>
      <Link to={`/question/${state.questions[0].uuid}`}>Let's have fun!</Link>
    </div>
  );
}

export default Home;
