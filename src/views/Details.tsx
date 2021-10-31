import React from "react";
import { useParams } from "react-router-dom";

import QuizDetail from "../components/quizzes/QuizDetail";

function Details() {
  const { id } = useParams<{ id: string }>();

  return (
    <React.Fragment>
      <QuizDetail id={id}></QuizDetail>
    </React.Fragment>
  );
}

export default Details;
