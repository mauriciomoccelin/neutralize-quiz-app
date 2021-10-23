import React from "react";
import { Link } from "react-router-dom";

function AnswerUserDetail() {
  return (
    <React.Fragment>
      <div className="pb-1 flex justify-start items-center mb-2">
        <Link to="/details/users">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </Link>
        <span className="text-base ml-2 font-bold uppercase text-gray-700">Answer By: Mauricio Moccelin</span>
      </div>
      <div className="pt-8">
        <div className="border-b pb-1 flex justify-between items-center mb-2">
          <span className="text-base font-semibold uppercase text-gray-700">Category</span>
        </div>
        <div className="shadow-md">
          <div className="tab overflow-hidden border-t">
            <input className="absolute opacity-0" id="tab-single-one" type="radio" name="tabs2" />
            <label className="block p-5 leading-normal cursor-pointer">Question</label>
            <div className="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
            <p className="p-5 max-w-md text-justify mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, architecto, explicabo perferendis nostrum, maxime impedit atque odit sunt pariatur illo obcaecati soluta molestias iure facere dolorum adipisci eum? Saepe, itaque.</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AnswerUserDetail;
