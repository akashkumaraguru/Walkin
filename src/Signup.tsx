import React from "react";
import Img from "./assets/Side-image.png"
import { Link } from 'react-router-dom';
import { EyeOff } from 'lucide-react';

function Signup() {
    return (

        <div className="grid sm:grid-rows-1 lg:grid-cols-2">
            <div className="">
                <img src={Img} alt="Side-Img" className=" hidden lg:block absolute lg:w-1/2 h-full object-cover rounded-r-3xl" />
                <h1 className="relative mt-100 ml-80 text-3xl font-semibold text-white font-[poppins]">Walkin</h1>
            </div>


            <div className="mt-35">
                <h1 className="font-semibold ml-51 text-blue-500 text-[24px] inline-block">Sign up</h1>

                <div className="flex flex-col items-center">
                    <input
                        type="text"
                        name="name"
                        id="Name"
                        placeholder="Enter a name"
                        className="bg-[#F2F2F2] stroke-[#E5E5E5] p-4 w-[360px] h-[48px] mt-6  focus:outline-none rounded-[6px]"
                    />

                    <input
                        type="email"
                        name="mailiD"
                        id="Name"
                        placeholder="Enter your Mail ID"
                        className="bg-[#F2F2F2] stroke-[#E5E5E5] p-4 w-[360px] h-[48px] mt-8  focus:outline-none rounded-[6px]"
                    />

                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Enter your mobile number"
                        pattern="[0-9]{10}"
                        maxLength={10}
                        className="bg-[#F2F2F2] stroke-[#E5E5E5] p-4 w-[360px] h-[48px] mt-8  focus:outline-none rounded-[6px]"
                    />

                    <input
                        type="password"
                        name=""
                        id="password"
                        placeholder="Enter your password"
                        className="bg-[#F2F2F2] stroke-[#E5E5E5] p-4 w-[360px] h-[48px] mt-6  focus:outline-none rounded-[6px]"
                    />

                `    <input
                        type="password"
                        name=""
                        id="password"
                        placeholder="Re-Confirm password"
                        className="bg-[#F2F2F2] stroke-[#E5E5E5] p-4 w-[360px] h-[48px]  focus:outline-none rounded-[6px]"
                        
                    />
                    `

                    <button className="bg-[#007AFF] text-white text-center cursor-pointer  w-[360px] h-[48px] mb-8  focus:outline-none rounded-[6px]">Sign in</button>

                    <div className="w-[360px] h-px bg-gray-300 mb-4"></div>

                    <p className="text-center">
                        Already have an Account?{" "}
                        <Link to="/login" className="text-[#007AFF] underline">
                            Login now
                        </Link>
                    </p>

                </div>

            </div>

        </div>


    )

}

export default Signup