import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

import QuizCard from "./QuizCard";
import AnswerUser from "../answers/AnswerUser";
import AnswerUserDetail from "../answers/AnswerUserDetail";

import { getQuizById, QuizDto } from "../../services/quiz-api";
import Loading from "../Loading";

interface QuizDetailProps {
  id: string;
}

function QuizDetail(props: QuizDetailProps) {
  const [quiz, setQuiz] = useState<QuizDto | null>(null);

  useEffect(() => {
    if (!quiz) getQuizById(props.id).then((quiz) => setQuiz(quiz));
  });

  if (!quiz) {
    return <Loading />;
  }

  return (
    <React.Fragment>
      <QuizCard quiz={quiz}></QuizCard>
      <Route path={`/details/${quiz._id}/users`}>
        <AnswerUser />
        <Route path={`/details/${quiz._id}/users/answer`}>
          <AnswerUserDetail />
        </Route>
      </Route>
    </React.Fragment>
  );
}

export default QuizDetail;
