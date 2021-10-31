import React from "react";
import { Link } from "react-router-dom";

function AnswerUser() {
  return (
    <React.Fragment>
      <div className="flex flex-col p-5">
        <div className="border-b pb-1 flex justify-between items-center mb-2">
          <span className=" text-base font-semibold uppercase text-gray-700">feedback</span>
          <img className="w-4 cursor-pointer" alt="" src="https://p.kindpng.com/picc/s/152-1529312_filter-ios-filter-icon-png-transparent-png.png" />
        </div>
        <Link to="/details/user/asnwers">
          <div className="flex border-b py-3 cursor-pointer hover:shadow-md px-2">
            <img className='w-10 h-10 object-cover rounded-lg' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' />
            <div className="flex flex-col px-2 w-full">
              <span className="text-sm text-red-500 capitalize font-semibold pt-1">
              I think I need a sunrise, I'm tired of the sunset    
              </span>
              <span className="text-xs text-gray-500 uppercase font-medium ">
                -"Boston," Augustana
              </span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
        <Link to="/details/:id/users/answer">
          <div className="flex border-b py-3 cursor-pointer hover:shadow-md px-2">
            <img className='w-10 h-10 object-cover rounded-lg' alt='User avatar' src='https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200' />
            <div className="flex flex-col px-2 w-full">
              <span className="text-sm text-red-500 capitalize font-semibold pt-1">
              I think I need a sunrise, I'm tired of the sunset    
              </span>
              <span className="text-xs text-gray-500 uppercase font-medium ">-"Boston," Augustana</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      </div>
    </React.Fragment>
  );
}

export default AnswerUser;