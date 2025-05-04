import React from "react";
import Img from "./assets/Side-image.png";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

      <div className="relative hidden lg:flex flex-col justify-center items-center ">
        <img
          src={Img}
          alt="Side-Img"
          className="absolute w-full h-full object-cover rounded-r-3xl"
        />
        <h1 className="relative z-10 text-4xl font-semibold text-white font-[poppins]">
          Walkin
        </h1>
        <div className="absolute inset-0 bg-black opacity-30 rounded-r-3xl"></div>
      </div>
      
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <h1 className="lg:hidden text-4xl font-semibold text-Black font-[poppins] mb-6">
          Walkin
        </h1>
        <h1 className="font-semibold text-blue-500 text-2xl sm:text-3xl mb-6">
          Login
        </h1>

        <div className="w-full max-w-sm">
          <input
            type="text"
            name="emailOrPhone"
            id="emailOrPhone"
            placeholder="Email or phone number"
            className="bg-[#F2F2F2] p-4 w-full mb-4 focus:outline-none rounded-[6px]"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="bg-[#F2F2F2] p-4 w-full mb-4 focus:outline-none rounded-[6px]"
          />

          <div className="w-full flex justify-end">
            <a href="#" className="text-blue-500 text-sm mb-4">
              Forgot password?
            </a>
          </div>

          <button className="bg-[#007AFF] text-white w-full py-3 mb-6 focus:outline-none rounded-[6px]">
            Log in
          </button>

          <div className="w-full h-px bg-gray-300 mb-6"></div>

          <p className="text-center text-sm">
            Don't have an Account?{" "}
            <Link to="/signup" className="text-[#007AFF] underline">
              Sign up Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
