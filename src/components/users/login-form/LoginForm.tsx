import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { LoginDto, loginService } from "../../../services/quiz-api";

function LoginForm() {
  const history = useHistory();
  const [login, setLogin] = useState(new LoginDto());

  const handleInputChange = (event: any) => {
    const target = event?.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target?.name;

    setLogin({ ...login, ...{ [name]: value } });
  };

  const onLogInHandler = async () => {
    const token = await loginService(login);

    if (token) {
      localStorage.setItem("Bearer", token);
      window.location.reload()
    }
  };
  const onGoToRegister = () => history.push("/register");

  return (
    <React.Fragment>
      <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
        <div className="max-w-xl w-full space-y-12">
          <div className="lg:text-left text-center">
            <div className="flex items-center justify-center">
              <div className="bg-black flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
                <form className="flex flex-col space-y-2" onSubmit={e => e.preventDefault()}>
                  <label className="font-bold text-lg text-white">
                    Username
                  </label>
                  <input value={login.username} name="username" onChange={handleInputChange} type="text" placeholder="user.name" className="border rounded-lg py-3 px-3 bg-black border-indigo-600 placeholder-white-500 text-white" />
                  <label className="font-bold text-lg text-white ">
                    Password
                  </label>
                  <input value={login.password} name="password" onChange={handleInputChange} type="password" placeholder="**********" className="border rounded-lg py-3 px-3 mt-4 bg-black border-indigo-600 placeholder-white-500 text-white" />
                  <button onClick={onLogInHandler} className="hover:text-black hover:bg-white border border-indigo-600 inline-flex text-white justify-between rounded-lg py-3 px-4 font-semibold">
                    Log In
                  </button>
                  <button onClick={onGoToRegister} className="hover:text-black hover:bg-white border border-indigo-600 inline-flex text-white justify-between rounded-lg py-3 px-4 font-semibold">
                    <span className="">Register</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default LoginForm;
