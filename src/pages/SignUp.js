import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = (e) => {
    dispatch(signUpUser({ email, password, name }));
    e.preventDefault();
    navigate("/login");
  };
  return (
    <div class="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div class="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
        <div class="p-5 bg-white md:flex-1">
          <h3 class="my-4 text-2xl font-semibold text-gray-700">
            Account Signup
          </h3>
          <form
            onSubmit={submitForm}
            action="#"
            class="flex flex-col space-y-5"
          >
            <div class="flex flex-col space-y-1">
              <label for="email" class="text-sm font-semibold text-gray-500">
                Name
              </label>
              <input
                type="text"
                id="name"
                autofocus
                onChange={(e) => setName(e.target.value)}
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <label for="email" class="text-sm font-semibold text-gray-500">
                Email address
              </label>
              <input
                type="email"
                id="email"
                autofocus
                onChange={(e) => setEmail(e.target.value)}
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>
            <div class="flex flex-col space-y-1">
              <div class="flex items-center justify-between">
                <label
                  for="password"
                  class="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
              />
            </div>

            <div>
              <button
                type="submit"
                class="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
              >
                Sign Up
              </button>
            </div>
            <div>
              {/* <span>
                {message ? (
                  <span className="text-red-600">{message}</span>
                ) : (
                  <span></span>
                )}
              </span> */}
            </div>
            <div class="flex flex-col space-y-5">
              <span class="flex items-center justify-center space-x-2">
                <span class="h-px bg-gray-400 w-14"></span>
                <span class="font-normal text-gray-500">or login with</span>
                <span class="h-px bg-gray-400 w-14"></span>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
