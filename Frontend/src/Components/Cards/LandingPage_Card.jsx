import React from 'react'
import {Button1,Button2} from "../Button/Button.js";
function LandingPage_Card({label="Card"}) {
  return (
    <div className='h-1/3 w-1/3 border flex flex-col justify-evenly items-center  rounded-md'>
        <div>
            <h1 className='text-center text-5xl font-extrabold  text-customDarkgreen'>{label}</h1>

        </div>
        
            <Button1 label = {"Login"}/>
            <Button2 label={"SignUP"}/>
        
    </div>
  )
}

export default LandingPage_Card