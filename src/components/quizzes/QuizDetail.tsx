import React from "react";

import QuizCard from "./QuizCard";
import AnswerUser from "../answers/AnswerUser";
import AnswerUserDetail from "../answers/AnswerUserDetail";
import { Redirect, Route } from "react-router-dom";

function QuizDetail() {
  return (
    <React.Fragment>
      <QuizCard></QuizCard>
      <Redirect to="/details/users"></Redirect>
      <Route path="/details/users">
        <AnswerUser></AnswerUser>
      </Route>
      <Route path="/details/user/asnwers">
        <AnswerUserDetail></AnswerUserDetail>
      </Route>
    </React.Fragment>
  );
}

export default QuizDetail;
