import React from "react";

import { QuizQuestionDto } from "../../services/quiz-api";

import AnswerCategoryQuestionDinamicType from "./AnswerCategoryQuestionDinamicType";

interface AnswerCategoryQuestionProps {
  question: QuizQuestionDto;
}

function AnswerCategoryQuestion(props: AnswerCategoryQuestionProps) {

  if (!props.question) {
    return <div>...</div>
  }

  return (
    <React.Fragment>
      <div className="divide-y grid mb-4">
        <label className="block">
          <span className="block text-gray-700 text-sm font-bold mb-2">{props.question.description}</span>
          {AnswerCategoryQuestionDinamicType(props.question)}
        </label>
      </div>
    </React.Fragment>
  );
}

export default AnswerCategoryQuestion;
