import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateLoginInData, validateSignUpData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  const handleButtonClick = () => {
    if (isSignInForm) {
      const loginErrorMessage = validateLoginInData(
        email.current.value,
        password.current.value
      );
      setErrorMessage(loginErrorMessage);
    } else {
      const signUpErrorMessage = validateSignUpData(
        email.current.value,
        name.current.value,
        password.current.value
      );
      console.log(name.current.value);
      console.log(signUpErrorMessage);
      setErrorMessage(signUpErrorMessage);
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute w-full h-full">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="background-pic"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 text-white rounded-sm bg-black bg-opacity-65 w-full max-w-md"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign up"}
        </h1>
        <input
          type="email"
          placeholder="Email or phone number"
          className="bg-black bg-opacity-25 border rounded-lg p-4 w-full my-4"
          ref={email}
        />
        {isSignInForm ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="Full name"
            ref={name}
            className="bg-black bg-opacity-25 border rounded-lg p-4 w-full my-4"
          />
        )}

        <input
          type="password"
          placeholder="Password"
          className="bg-black bg-opacity-25 border rounded-lg p-4 w-full my-4"
          ref={password}
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign up"}
        </button>
        <p className="text-center text-gray-500">OR</p>
        <button
          disabled
          className="bg-white bg-opacity-25 p-4 my-4 w-full rounded-lg text-white"
        >
          Use a sign-in code
        </button>
        <p className="py-4" onClick={toggleSignInForm}>
          {isSignInForm ? (
            <>
              <span className="text-gray-500">New to Netflix? </span>
              <span className="cursor-pointer">Sign up now.</span>
            </>
          ) : (
            <>
              <span className="text-gray-500">Already registered? </span>
              <span className="cursor-pointer">Sign in now.</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
