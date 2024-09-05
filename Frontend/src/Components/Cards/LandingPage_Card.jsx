import React from 'react'
import {Button1,Button2} from "../Button/Button.js";
function LandingPage_Card({label="Card",v='1'}) {
  return (
    <div className={v === '1' 
      ? "h-1/3 w-1/4 border flex flex-col justify-evenly items-center rounded-2xl shadow-lg bg-gradient-to-r from-green-100 via-blue-200 to-purple-300 p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 animate-slideInFromleft" 
      : "h-1/3 w-1/4 border flex flex-col justify-evenly items-center rounded-2xl shadow-lg bg-gradient-to-r from-green-100 via-blue-200 to-purple-300 p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 animate-slideInFromright"}>
  
      <div>
          <h1 className='text-center text-5xl font-extrabold text-customDarkgreen'>{label}</h1>
      </div>
      
      <Button1 label={"Login"} />
      <Button2 label={"SignUP"} />
  </div>
  
  )
}

export default LandingPage_Card


