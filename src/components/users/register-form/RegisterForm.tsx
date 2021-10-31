import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { UserDto, registerService } from "../../../services/quiz-api";

function RegisterForm() {
  const history = useHistory();
  const [user, setUser] = useState(new UserDto());

  const handleInputChange = (event: any) => {
    const target = event?.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target?.name;

    setUser({ ...user, ...{ [name]: value } });
  };

  const onCreateAccountHandler = async (event: any) => {
    event.preventDefault();

    await registerService(user);
  };

  const handlerBackToLogin = () => history.push("/login");

  return (
    <React.Fragment>
      <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
        <div className="max-w-xl w-full space-y-12">
          <div className="lg:text-left text-center">
            <div className="flex items-center justify-center">
              <div className="bg-black flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
                <form className="flex flex-col space-y-2" onSubmit={e => e.preventDefault()}>
                  <svg xmlns="http://www.w3.org/2000/svg" onClick={handlerBackToLogin} className="text-white h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                  <label className="font-bold text-lg text-white ">
                    Your Name
                  </label>
                  <input value={user.name} name="name" onChange={handleInputChange} type="text" placeholder="Account number" className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white" />
                  <label className="font-bold text-lg text-white">
                    Your E-mail
                  </label>
                  <input value={user.email} name="email" onChange={handleInputChange} type="email" placeholder="email@example.com" className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white" />
                  <label className="font-bold text-lg text-white">
                    Username
                  </label>
                  <input value={user.username} name="username" onChange={handleInputChange} type="text" placeholder="user.name" className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white" />
                  <label className="font-bold text-lg text-white ">
                    Password
                  </label>
                  <input value={user.password} name="password" onChange={handleInputChange} type="password" placeholder="**********" className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white" />
                  <label className="font-bold text-lg text-white ">
                    Confirm Password
                  </label>
                  <input value={user.password} name="password" onChange={handleInputChange} type="password" placeholder="**********" className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white" />
                  <button onClick={onCreateAccountHandler} className="hover:text-black hover:bg-white border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold">
                    Create Account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default RegisterForm;
