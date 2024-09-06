import React from 'react'

function Button2({label="Sign Up",onclick}) {
  return (
    <button className='h-14 w-1/3  bg-white border border-black text-2xl rounded-l-full rounded-r-full' onClick={onclick}>
      <h1 className=' text-customDarkgreen font-outfit font-semibold'>{label}</h1>
    </button>
  )
}

export default Button2;