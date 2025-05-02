import React from "react";
import Img from "./assets/Side-image.png";

function Login() {

    return (
        <div className="lg:max-w-2xl">
          <div className="flex flex-col">

          <div className="">
                <img src={Img} alt="SideBar" className="w-[680px] object-fit lg:max-h-screen  absolute"/>
                <h1 className="relative text-white lg:font-semibold text-3xl px-[40%] py-[50%] ">Walkin</h1>
            </div>

            <div className="bg-black w-full z-30">

            </div>
            
          </div>





        </div>
    )
}

export default Login