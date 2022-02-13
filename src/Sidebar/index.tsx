
import Logo from "../image/logo.svg";
import { BiHomeAlt } from "react-icons/Bi";


import { BiChevronDown } from "react-icons/Bi";

import { RiApps2Line } from "react-icons/ri";

import { IoCardOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { IoCalculatorOutline } from "react-icons/io5";

import { AiOutlineSetting } from "react-icons/ai";



import "./Sidear.css";

import ProfileImage from "../image/profile.png";

export default function index() {
    return (
        <div className="w-40 sidebar h-screen border-r flex flex-col justify-around border-gray-300 px-10 py-5">
            <div className="logo-container mb-5">

                <img src={Logo} alt="logo" />
            </div>

            <div className="links-container">
                <h3 className="font-bold text-sm text-[#3629B7] mb-4 py-1 px-2 ">Menu</h3>

                <div className="links text-[#838383]">
                    <div className="link">
                        <BiHomeAlt className="icon" />
                        <span className="font-normal">Home</span>
                    </div>


                    <div className="link ">
                        <RiApps2Line className="icon " />
                        <span className="font-normal">Garage</span>
                    </div>


                    <div className="link  ">
                        <IoCardOutline className="icon" />
                        <span className="font-normal">Service Menu</span>
                    </div>

                    <div className="link  ">
                        <FiUsers className="icon" />
                        <span className="font-normal">Racers</span>
                    </div>

                    <div className="link  ">
                        <IoCalculatorOutline className="icon" />
                        <span className="font-normal">Calculator</span>
                    </div>

                    <div className="link  ">
                        <AiOutlineSetting className="icon" />
                        <span className="font-normal">Settings</span>
                    </div>
                </div>






            </div>

            <div className="scheduled-races-container flex flex-col space-y-3 ">

                <h2 className="text-[#3629B7] font-bold text-sm py-1 px-2"  >
                    Scheduled Races
                </h2>

                <div className="race flex items-center space-x-5 py-1 px-2 ">
                    <p className="w-4 h-4 border border-[#3F7EF8] rounded-full">
                    </p>
                    <p className="text-sm font-normal text-[#838383]">
                        MotoGP 2022
                    </p>
                </div>


                <div className="race flex items-center space-x-5 text-[#838383] py-1 px-2 ">
                    <p className="w-4 h-4 border border-[#FA6C6A] rounded-full">
                    </p>
                    <p className="text-sm font-normal text-[#838383]">
                        Dynamics 22
                    </p>
                </div>

                <div className="race flex items-center space-x-5 py-1 px-2 ">
                    <p className="w-4 h-4 border border-[#27C1B3] rounded-full">
                    </p>
                    <p className="text-sm font-normal text-[#838383]">
                        Olympics
                    </p>
                </div>



            </div>

            <div className="logout-user p-3 bg-[#F9FAFF] rounded-lg flex items-center space-x-5">



                <div className="profile-image flex items-center space-x-4">

                    <img src={ProfileImage} alt="profile" />

                    <h2 className="text-[#591AED] text-sm font-semibold">

                        Killua
                    </h2>
                </div>

                <div className="next-icon">
                    <BiChevronDown className="text-[#591AED] " />
                </div>


            </div>
        </div>
    );
}
