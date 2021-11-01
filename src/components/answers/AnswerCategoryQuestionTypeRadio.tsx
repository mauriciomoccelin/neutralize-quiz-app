import React from "react";

function AnswerCategoryQuestionTypeRadio() {
  return (
    <React.Fragment>
      <div>
        <label className="inline-flex items-center">
          <input type="radio" className="form-radio" name="radio" value="3" />
          <span className="ml-2">Option 3</span>
        </label>
      </div>
    </React.Fragment>
  );
}

export default AnswerCategoryQuestionTypeRadio;
