import React from "react";

function AnswerCategoryQuestionTypeMultipleSelection() {
  return (
    <React.Fragment>
      <select className="
        px-3
        py-4
        form-multiselect
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
      ">
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </React.Fragment>
  );
}

export default AnswerCategoryQuestionTypeMultipleSelection;
