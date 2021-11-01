import React from "react";

import { QuizQuestionDto } from "../../services/quiz-api";
import AnswerCategoryQuestionTypeCheckBox from "./AnswerCategoryQuestionTypeCheckBox";

import AnswerCategoryQuestionTypeLongText from "./AnswerCategoryQuestionTypeLongText";
import AnswerCategoryQuestionTypeMultipleSelection from "./AnswerCategoryQuestionTypeMultipleSelection";
import AnswerCategoryQuestionTypeNumber from "./AnswerCategoryQuestionTypeNumber";
import AnswerCategoryQuestionTypeRadio from "./AnswerCategoryQuestionTypeRadio";
import AnswerCategoryQuestionTypeSingleSelection from "./AnswerCategoryQuestionTypeSingleSelection";
import AnswerCategoryQuestionTypeSmallText from "./AnswerCategoryQuestionTypeSmallText";

interface ComponentsType {
  [key: number]: React.FC;
}

const Components: ComponentsType = {
  1: AnswerCategoryQuestionTypeNumber,
  2: AnswerCategoryQuestionTypeSmallText,
  3: AnswerCategoryQuestionTypeLongText,
  4: AnswerCategoryQuestionTypeSingleSelection,
  5: AnswerCategoryQuestionTypeMultipleSelection,
  6: AnswerCategoryQuestionTypeRadio,
  7: AnswerCategoryQuestionTypeCheckBox
};

export default (question: QuizQuestionDto): React.ReactElement => {
  if (typeof Components[question.type] !== "undefined") {
    return React.createElement(Components[question.type], {
      key: question._id,
    });
  }
  return React.createElement(() => <div>...</div>, { key: question._id });
};
