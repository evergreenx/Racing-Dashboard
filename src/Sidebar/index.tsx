import React from "react";
import Logo from "../image/logo.svg";
import { BiHomeAlt } from "react-icons/Bi";
import "./Sidear.css";

export default function index() {
    return (
        <div className="w-40 sidebar h-screen">
            <div className="logo-container">
                <img src={Logo} alt="logo" />
            </div>

            <div className="links-container">
                <h3 className="font-bold text-sm text-[#3629B7] ">Menu</h3>

                <div className="links text-[#838383]">
                    <div className="link flex items-center text-lg justify-around">
                        <BiHomeAlt className="icon" />
                        <span className="text">Home</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
