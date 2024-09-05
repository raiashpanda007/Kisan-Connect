import React from 'react'
import {LandingPage_Card} from "../Components/Cards/Cards.js";
function Landing_Screen() {
  return (
    <div className='border h-full overflow-auto'>
        <div className='h-full flex items-center justify-evenly'>
            <LandingPage_Card label='FARMER'/>
            <LandingPage_Card label='CONTRACTOR'/>
        </div>
    </div>
  )
}

export default Landing_Screen