import React from "react";
import Img from "./assets/Side-image.png";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <div className="grid sm:grid-rows-1 lg:grid-cols-2">
      <div>
        <img
          src={Img}
          alt="Side-Img"
          className="hidden lg:block absolute lg:w-1/2 h-full object-cover rounded-r-3xl"
        />
        <h1 className="relative mt-100 ml-80 text-3xl font-semibold text-white font-[poppins]">
          Walkin
        </h1>
      </div>

      <div className="mt-50">
        <h1 className="font-semibold ml-51 text-blue-500 text-[24px] inline-block">
          Login
        </h1>

        <div className="flex flex-col items-center">
          <input
            type="text"
            name="emailOrPhone"
            id="emailOrPhone"
            placeholder="Email or phone number"
            className="bg-[#F2F2F2] stroke-[#E5E5E5] p-4 w-[360px] h-[48px] mt-10 focus:outline-none rounded-[6px]"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="bg-[#F2F2F2] stroke-[#E5E5E5] p-4 w-[360px] h-[48px] mt-4 focus:outline-none rounded-[6px]"
          />

          <a
            href="#"
            className="self-start ml-[calc(50%-180px)] mt-4 text-blue-500 text-sm mb-8"
          >
            Forgot password?
          </a>

          <button className="bg-[#007AFF] text-white text-center cursor-pointer w-[360px] h-[48px] mb-8 focus:outline-none rounded-[6px]">
            Sign in
          </button>

          <div className="w-[360px] h-px bg-gray-300 mt-4 mb-6"></div>
          <p className="text-center">
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
