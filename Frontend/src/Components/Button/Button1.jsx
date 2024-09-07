import React from 'react'

function Button1({label,onclick,className}) {
  return (
    <button className='h-14 w-1/3  bg-customDarkgreen text-2xl rounded-l-full rounded-r-full' onClick={onclick}>
      <h1 className=' text-white font-outfit font-semibold'>{label}</h1>
    </button>
  )
}

export default Button1