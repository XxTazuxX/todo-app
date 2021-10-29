/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import AuthDetails from "./AuthDetails";
import Login from "./Login";
import SignUp from "./SignUp";

const authBox = {
  loginBox: {
    name: "login",
    details: "Log in and start creating your next task",
    options: "Do not have an account",
    authType: "Sign Up",
  },
  signUpBox: {
    name: "Sign Up",
    details:
      "Register and create an account on Todo List. Write your tasks anytime and anywhere",
    options: "Already have an account",
    authType: "Login",
  },
};

const LoginPage = ({ loginFunc }) => {
  const [auth, setAuth] = useState(true);

  const { name, details, options, authType } = auth
    ? authBox.loginBox
    : authBox.signUpBox;

  const authClick = () => {
    setAuth(!auth);
  };

  return (
    <div className="mx-auto h-screen flex sm:justify-center sm:items-center box-border bg-gray-300">
      <div
        className={`h-full w-full ${
          auth ? "sm:h-3/6" : "sm:h-4/6"
        } sm:w-5/6 md:w-4/6 flex ${auth ? "flex-col" : "flex-col-reverse"} ${
          auth ? "sm:flex-row" : "sm:flex-row-reverse"
        } sm:justify-center sm:items-center bg-white sm:rounded-2xl`}
      >
        <div className="h-full w-full sm:flex-1 bg-blue-900 sm:rounded-2xl text-white block">
          <AuthDetails
            name={name}
            details={details}
            options={options}
            authType={authType}
            setAuth={authClick}
          />
        </div>
        <div className="h-full w-full sm:flex-1 sm:rounded-2xl block">
          <div className="relative h-full">
            <form className="py-8 px-6">
              {auth ? (
                <Login loginFunc={loginFunc} />
              ) : (
                <SignUp loginFunc={loginFunc} />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
