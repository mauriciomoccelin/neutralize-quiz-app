import React from "react";

import QuizCard from "./QuizCard";
import AnswerUser from "../answers/AnswerUser";
import AnswerUserDetail from "../answers/AnswerUserDetail";

function QuizDetail() {
  return (
    <React.Fragment>
      <QuizCard></QuizCard>
      <AnswerUser></AnswerUser>
      <AnswerUserDetail></AnswerUserDetail>
    </React.Fragment>
  );
}

export default QuizDetail;
