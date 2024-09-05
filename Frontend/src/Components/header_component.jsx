import React from 'react'
import {useSelector} from 'react-redux'

import { LanguageIcon } from '../assets/Icons';

function header_component() {
  const user = useSelector(state => state.user);

  const navBar = [
    {
      name:'Predictions',
      link:'/predictions'

    },
    {
      name:'Services',
      link:'/Services'

    },
    {
      name:'Help',
      link:'/help'
    }
  ]
  return (
    <div className=' absolute w-full bg-customLightgreen h-24 rounded-lg flex items-center justify-center'>
      <div className='h-12 w-12 rounded-full border border-black flex justify-center items-center'> 
        logo
      </div>
      <div className='w-5/6 border text-5xl  text-customDarkgreen  font-bold text-center '>
        KRISHI CONNECT
      </div>}
      <div className='w-1/6 border flex justify-center items-center'>
         <div className= 'w-30 p-4 rounded-r-full rounded-l-full text-white font-semibold font-outfit bg-customDarkgreen cursor-pointer '>
         <LanguageIcon/> Select Language
         </div>
      </div>      
    </div>
  )
}

export default header_component