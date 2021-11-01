import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnswerCategory from "../components/answers/AnswerCategory";

import QuizCard from "../components/quizzes/QuizCard";
import { getQuizById, QuizDto } from "../services/quiz-api";


function Answer() {
  const { idQuiz } = useParams<{ idQuiz: string }>();
  const [quiz, setQuiz] = useState<QuizDto>(new QuizDto());
  
  useEffect(() => {
    if (!quiz._id) getQuizById(idQuiz).then((quiz) => setQuiz(quiz));
  });

  if (!quiz._id) {
    return <div>...</div>
  }

  return (
    <React.Fragment>
      <QuizCard quiz={quiz}></QuizCard>
      {quiz.categories.map(qc => <AnswerCategory key={qc._id} category={qc} />)}
    </React.Fragment>
  );
}

export default Answer;
