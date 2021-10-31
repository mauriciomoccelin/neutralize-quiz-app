import React from "react";
import { Route, Switch } from "react-router-dom";

import LoginForm from "../components/users/login-form/LoginForm";
import RegisterForm from "../components/users/register-form/RegisterForm";

function Login() {
  return (
    <React.Fragment>
      <div className="relative min-h-screen grid bg-black ">
        <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 ">
          <div className="relative sm:w-1/2 xl:w-3/5 bg-bg-black-500 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden  text-white bg-no-repeat bg-cover relative">
            <div className="absolute bg-black  opacity-25 inset-0 z-0"></div>
            <div className="w-full grid lg:max-w-2xl md:max-w-md z-10 items-center text-center ">
              <div className=" font-bold leading-tight mb-6 mx-auto content-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-80 w-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 5c7.18 0 13 5.82 13 13M6 11a7 7 0 017 7m-6 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <div className="font-bold text-lg text-white ">
                  Neutralize Quiz App
                </div>
              </div>
            </div>
          </div>
          <Switch>
            <Route path="/register">
              <RegisterForm></RegisterForm>
            </Route>
            <Route>
              <LoginForm></LoginForm>
            </Route>
          </Switch>
        </div>
      </div>
    </React.Fragment>
  );
}


export default Login;