import React from "react";
import Img from "./assets/Side-image.png";

function Login() {

    return (

        <div className="grid grid-cols-2 w-screen h-screen flex ">
            <div className="">
                <img src={Img} alt="Side-Img" className="absolute lg:w-1/2 lg:h-full object-cover rounded-r-3xl" />
                <h1 className="relative mt-100 ml-80 text-3xl font-semibold text-white font-[poppins]">Walkin</h1>
            </div>


            <div className="mt-50">
                <h1 className="font-semibold ml-51 text-blue-500 text-[24px]">Login</h1>

                <div className="flex flex-col items-center">
                    <input
                        type="text"
                        name=""
                        id="mailinput"
                        placeholder="Email or phone number"
                        className="bg-[#F2F2F2] stroke-[#E5E5E5] p-4 w-[360px] h-[48px] mt-10 focus:outline-none rounded-[6px]"
                    />
                    <input
                        type="text"
                        name=""
                        id="password"
                        placeholder="Enter your password"
                        className="bg-[#F2F2F2] stroke-[#E5E5E5] p-4 w-[360px] h-[48px] mt-4 focus:outline-none rounded-[6px]"
                    />

                    <a href="#" className="self-start ml-[calc(50%-180px)] mt-4 text-blue-500 text-sm mb-8">Forgot password?</a>

                    <button className="bg-[#007AFF] text-white text-center cursor-pointer  w-[360px] h-[48px] mb-8  focus:outline-none rounded-[6px]">Sign in</button>

                    <div className="w-[360px] h-px bg-gray-300 mt-4 mb-6"></div>
                    <p>Don't have an Account? <a href="#" className="text-[#007AFF] underline">Sign up Now</a></p>

                </div>

            </div>

        </div>



    )
}

export default Login