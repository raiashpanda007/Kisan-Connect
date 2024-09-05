import React from 'react'

function InputBox({label="Label",placeholder,type="text",...props}) {
  return (
    <div className='w-2/3 flex flex-col '>
      <label className='font-outfit text-customDarkgreen'>{label}</label>
      <input type={type} placeholder={placeholder} {...props} className=' border-black h-14 rounded-l-full rounded-r-full p-3'/>
    </div>
  )
}

export default InputBox