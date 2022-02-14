import React from 'react'
import CarCarousel from './CarsCarosuel'
import AboutRace from './AboutRace'

export default function CenterContent() {
  return (
    <div className='flex  '>

      <div className="flex-1 mr-20">
        <CarCarousel />

      </div>

      <div className="
      w-96
">


        <AboutRace />

      </div>

    </div>
  )
}
