import React from 'react'
import Champtionship from '../image/champtionship.svg'
import Skins from '../image/skins.svg'
import trophies from '../image/trophies.svg'

export default function index() {

    let data = [{

        name: 'Championship',
        icon: Champtionship,
        number: 72
    }
        ,

    {

        name: 'Skins',
        icon: Skins,
        number: 32
    },

    {

        name: 'Trophies Won',
        icon: trophies,
        number: 64
    }

    ]

    return (
        <div>


            {
                data.map((item, index) => {
                    return (
                        <div className="flex space-x-6  items-center my-10 " key={index}>
                            <div> <img src={item.icon} className="w-16 h-16" alt="logo" /> </div>

                            <div className="text">
                                <p className=" text-xl font-bold text-[#1D2C3C]">{item.number}</p>
                                <p className=" text-base text-[#9BA6B2] font-bold">{item.name}</p>

                            </div>

                        </div>
                    )
                })

            }


        </div>
    )
}
