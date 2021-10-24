import React, { useState } from "react";

import { UserDto, registerService } from '../services/quiz-api'; 

interface Props {
  setLoggin: React.Dispatch<React.SetStateAction<boolean>>
};

function Login(props: Props) {
  const [user, setUser] = useState(new UserDto());

  const onCreateAccountHandler = async (event: any) => {
    event.preventDefault();
    
    const result = await registerService(user);
    props.setLoggin(true);
  }

  const handleInputChange = (event: any) => {
    const target = event?.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target?.name;

    setUser({...user, ...{ [name]: value }});
  }

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
          <div className="md:flex md:items-center md:justify-left w-full sm:w-auto md:h-full xl:w-1/2 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none ">
            <div className="max-w-xl w-full space-y-12">
              <div className="lg:text-left text-center">
                <div className="flex items-center justify-center ">
                  <div className="bg-black flex flex-col w-80 border border-gray-900 rounded-lg px-8 py-10">
                    <form className="flex flex-col space-y-2" onSubmit={onCreateAccountHandler} >
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
                      <button className="border border-indigo-600 bg-black text-white rounded-lg py-3 font-semibold">
                        Create Account
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}


export default Login;