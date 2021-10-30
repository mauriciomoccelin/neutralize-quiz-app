import React, { useEffect, useState } from "react";

import QuizCard from "../components/quizzes/QuizCard";
import { getAllQuizService, QuizDto } from "../services/quiz-api";


function Home() {
  
  const [quizzes, setQuizzes] = useState(new Array<QuizDto>())

  useEffect(() => {
    getAllQuizService().then(r => setQuizzes(r))
  });

  return (
    <React.Fragment>
      {
        quizzes.map(q => <QuizCard key={q._id} quiz={q}></QuizCard>)
      }
    </React.Fragment>
  )
}

export default Home;