import React from 'react'
import {Button1,Button2} from "../Button/Button.js";
import { useNavigate } from 'react-router-dom';
function LandingPage_Card({label="Card",v='1',type="farmer"}) {
  const naviagte = useNavigate();
  return (
    <div className={v === '1' 
      ? "h-1/3 w-1/4 border flex flex-col justify-evenly items-center rounded-2xl shadow-lg bg-gradient-to-r from-green-100 via-blue-200 to-purple-300 p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 animate-slideInFromleft" 
      : "h-1/3 w-1/4 border flex flex-col justify-evenly items-center rounded-2xl shadow-lg bg-gradient-to-r from-green-100 via-blue-200 to-purple-300 p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 animate-slideInFromright"}>
  
      <div>
          <h1 className='text-center text-5xl font-extrabold text-customDarkgreen'>{label}</h1>
      </div>
      
      <Button1 label={"Login"} onclick={()=>naviagte(`/${type}/login`)}/>
      <Button2 label={"SignUP"}onclick={()=>naviagte(`/${type}/signup`)} />
  </div>
  
  )
}

export default LandingPage_Card


