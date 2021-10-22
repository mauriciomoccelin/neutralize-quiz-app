import React from "react";

function AnswerUserDetail() {
  return (
    <React.Fragment>
      <div>
        <p>Open <strong>one</strong></p>
        <div className="shadow-md">
          <div className="tab overflow-hidden border-t">
            <input className="absolute opacity-0" id="tab-single-one" type="radio" name="tabs2" />
            <label className="block p-5 leading-normal cursor-pointer">Label One</label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
            <p className="p-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AnswerUserDetail;
