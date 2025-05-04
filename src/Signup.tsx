import React from "react";
import Img from "./assets/Side-image.png";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      
      <div className="relative hidden lg:flex flex-col justify-center items-center bg-blue-500">
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

      {/* Right Side Signup Form (mobile + desktop) */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        {/* Walkin heading on mobile + tablet */}
        <h1 className="lg:hidden text-4xl font-semibold text-Black font-[poppins] mb-6">
          Walkin
        </h1>

        <h2 className="font-semibold text-blue-500 text-2xl sm:text-3xl mb-6">
          Sign up
        </h2>

        <div className="w-full max-w-sm">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="bg-[#F2F2F2] p-4 w-full mb-4 focus:outline-none rounded-[6px]"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your Mail ID"
            className="bg-[#F2F2F2] p-4 w-full mb-4 focus:outline-none rounded-[6px]"
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter your mobile number"
            pattern="[0-9]{10}"
            maxLength={10}
            className="bg-[#F2F2F2] p-4 w-full mb-4 focus:outline-none rounded-[6px]"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="bg-[#F2F2F2] p-4 w-full mb-4 focus:outline-none rounded-[6px]"
          />
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Re-confirm password"
            className="bg-[#F2F2F2] p-4 w-full mb-6 focus:outline-none rounded-[6px]"
          />

          <button className="bg-[#007AFF] text-white w-full py-3 mb-6 focus:outline-none rounded-[6px]">
            Sign up
          </button>

          <div className="w-full h-px bg-gray-300 mb-6"></div>

          <p className="text-center text-sm">
            Already have an Account?{" "}
            <Link to="/login" className="text-[#007AFF] underline">
              Login now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
