import React from "react";
import logo from "../assets/images/logo.png";

const LogIn = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex max-w-screen-lg w-full shadow-lg rounded-lg ">
        <div className="hidden md:flex w-1/2 items-center justify-center p-8">
          <img src={logo} alt="Logo" className="object-cover " />
        </div>
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-4xl font-semibold text-white mb-4 flex justify-center">
            Log In
          </h2>
          <form>
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

            <div className="flex justify-center pt-4">
              <button type="submit" className="">
                LOG IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
