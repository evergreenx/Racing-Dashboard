import React from 'react'
import { RiSearch2Line } from 'react-icons/ri'
import { FiUser } from 'react-icons/fi'
import profileImage from '../image/profile.png'

import { VscBell } from 'react-icons/vsc'

import CarList from '../Data/carList.json'
export default function index() {


    const renderCarList = () => {
        return CarList.map((car, index) => {

            return (
                <option key={car.brand}>
                    {car.brand} {car.models[0]}
                </option>
            )


        })
    }

    return (
        <div className='w-full pl-72  bg-[#FBFCFF] absolute border-b py-5 flex justify-between items-center pr-14 '>

            <div className="w-96 search-bar flex bg-white p-2 items-center border border-[#E7E7E7] rounded">

                <RiSearch2Line className='icon text-[#E7E7E7]' />
                <input className="p-2  w-full placeholder:text-[#CDCDCD] font-semibold outline-none " type="text" placeholder="Search for a race , car or race " />
            </div>

            <div className="choose-car mr-4 ">




                <select className='outline-none rounded font-semibold p-4 border border-[#E7E7E7] text-[#CDCDCD] w-96'>
                    <option >
                        Choose a  car
                    </option>


                    {renderCarList()}
                </select>
            </div>


            <div className="icons-part flex items-center space-x-10">


                <div className="icon-container flex ">
                    <div className="bell  -mx-2">
                        <VscBell className='icon cursor-pointer ' />

                    </div>


                    <span className="inline-block w-2 h-2  bg-[#FF2F5E] rounded-full"></span>
                </div>
                <FiUser className='icon cursor-pointer' />

                <img src={profileImage} className="cursor-pointer" />


            </div>


        </div>
    )
}
