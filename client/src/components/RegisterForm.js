import React from "react";
import "../styles/register_form.css";
import logo from "../assets/images/logo.png";

const RegisterForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex max-w-screen-lg w-full shadow-lg rounded-lg ">
        <div className="hidden md:flex w-1/2 items-center justify-center p-8">
          <img src={logo} alt="Logo" className="object-cover " />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-4xl font-semibold text-white mb-4 flex justify-center">
            Sign Up
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-lg font-semibold text-white"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-3 mt-2 rounded-lg"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-white"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-2 rounded-lg"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-lg font-semibold text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-3 mt-2 rounded-lg"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-lg font-semibold text-white"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full p-3 mt-2 rounded-lg"
                placeholder="Confirm your password"
                required
              />
            </div>
            <div className="flex justify-center pt-4">
              <button type="submit" className="">
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
