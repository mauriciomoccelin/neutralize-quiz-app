import React from "react";

function AnswerCategoryQuestionTypeLongText() {
  return (
    <React.Fragment>
      <textarea
        className="
        px-3
        py-4
        placeholder-gray-400
        text-gray-600
        relative
        bg-white bg-white
        rounded
        text-base
        border border-gray-400
        outline-none
        focus:outline-none focus:ring
        w-full
      "
        placeholder="Enter some long form content."
      ></textarea>
    </React.Fragment>
  );
}

export default AnswerCategoryQuestionTypeLongText;
