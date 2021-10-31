import React from "react";

import { Link } from "react-router-dom";
import { QuizDto } from "../../services/quiz-api";

interface QuizCardProps {
  quiz: QuizDto;
}

function QuizCard(props: QuizCardProps) {
  if (!props.quiz || !props.quiz.quizOf)
  {
    return <div></div>
  }

  return (
    <React.Fragment>
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div className="flex justify-center md:justify-end -mt-16">
          <img
            className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
            alt=""
          />
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">
            { props.quiz.quizOf.name }
          </h2>
          <p className="mt-2 text-justify text-gray-600">
            { props.quiz.description }
          </p>
        </div>
        <div className="flex justify-end mt-4">
          <Link to={`details/${props.quiz._id}`} className="text-xl font-medium text-indigo-500">
            Answer
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default QuizCard;
