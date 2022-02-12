import React from "react";
import Logo from "../image/logo.svg";
import { BiHomeAlt } from "react-icons/Bi";
import "./Sidear.css";

export default function index() {
    return (
        <div className="w-40 sidebar h-screen border-r-2 flex flex-col justify-between border-gray-300 p-10">
            <div className="logo-container">

                <img src={Logo} alt="logo" />
            </div>

            <div className="links-container">
                <h3 className="font-bold text-sm text-[#3629B7] mb-4 ">Menu</h3>

                <div className="links text-[#838383]">
                    <div className="link flex items-center space-x-5 cursor-pointer ">
                        <BiHomeAlt className="icon" />
                        <span className="font-normal">Home</span>
                    </div>
                </div>


               
            </div>

            <div className="scheduled-races-container flex flex-col ">


<div className="race flex items-center space-x-5 ">
    <p className="w-4 h-4 border border-[#3F7EF8] rounded-full">
    </p>
    <p className="text-sm font-normal">
        MotoGP 2022
    </p>
</div>


<div className="race flex items-center space-x-5 ">
    <p className="w-4 h-4 border border-[#FA6C6A] rounded-full">
    </p>
    <p className="text-sm font-normal">
        Dynamics 22
    </p>
</div>

<div className="race flex items-center space-x-5 ">
    <p className="w-4 h-4 border border-[#27C1B3] rounded-full">
    </p>
    <p className="text-sm font-normal">
        Olympics
    </p>
</div>



</div>
        </div>
    );
}
