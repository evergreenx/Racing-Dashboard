
import Logo from "../image/logo.svg";
import { BiHomeAlt } from "react-icons/Bi";


import { BiChevronDown } from "react-icons/Bi";

import { GrAppsRounded } from "react-icons/Gr";

import { IoCardOutline } from "react-icons/Io";







import "./Sidear.css";

import ProfileImage from "../image/profile.png";

export default function index() {
    return (
        <div className="w-40 sidebar h-screen border-r flex flex-col justify-between border-gray-300 p-10">
            <div className="logo-container">

                <img src={Logo} alt="logo" />
            </div>

            <div className="links-container">
                <h3 className="font-bold text-sm text-[#3629B7] mb-4 ">Menu</h3>

                <div className="links text-[#838383]">
                    <div className="link mb-7   flex items-center space-x-5 cursor-pointer ">
                        <BiHomeAlt className="icon" />
                        <span className="font-normal">Home</span>
                    </div>


                    <div className="link  mb-7 flex items-center space-x-5 cursor-pointer ">
                        <GrAppsRounded className="icon" />
                        <span className="font-normal">Garage</span>
                    </div>


                    <div className="link  mb-7 flex items-center space-x-5 cursor-pointer ">
                        <IoCardOutline className="icon" />
                        <span className="font-normal">Garage</span>
                    </div>
                </div>






            </div>

            <div className="scheduled-races-container flex flex-col space-y-6 ">

                <h2 className="text-[#3629B7]" >
                    Scheduled Races
                </h2>

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

            <div className="logout-user p-3 bg-[#F9FAFF] rounded-lg flex items-center space-x-5">



                <div className="profile-image flex items-center space-x-4">

                    <img src={ProfileImage} alt="profile" />

                    <h2 className="text-[#591AED] font-semibold">

                        Killua
                    </h2>
                </div>

                <div className="next-icon">
                    <BiChevronDown />
                </div>


            </div>
        </div>
    );
}
