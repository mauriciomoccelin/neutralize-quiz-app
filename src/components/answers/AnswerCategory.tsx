import React from "react";
import { QuizCategoryDto } from "../../services/quiz-api";
import AnswerCategoryQuestion from "./AnswerCategoryQuestion";

interface AnswerCategoryProps {
  category: QuizCategoryDto;
}

function AnswerCategory(props: AnswerCategoryProps) {
  if (!props.category || !props.category.questions.length) {
    return <div>...</div>;
  }

  return (
    <React.Fragment>
      <div className="divide-y grid max-w-md p-4 bg-white shadow-lg rounded-lg mb-2">
        <h2 className="text-gray-800 text-2xl font-semibold">
          {props.category.description}
        </h2>
        <div className="p-4 text-left">
          {props.category.questions.map((qcq) => (
            <AnswerCategoryQuestion key={qcq._id} question={qcq} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default AnswerCategory;
