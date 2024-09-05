import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
import {Button1} from '../../Components/Button/Button.js'
import {InputBox} from '../../Components/Component.js'
const SignUp = () => {
  const {register, handleSubmit} = useForm();

  return (
    <div className='w-full h-full flex items-center justify-center '>
      <div className='border h-3/4 w-1/3 bg-customLightgreen flex flex-col justify-evenly items-center rounded-lg'>
        <h1 className='text-4xl text-center text-customDarkgreen font-semibold'>Sign Up</h1>
        <InputBox label='Name'/>
        <InputBox label='Email'/>
        <InputBox label='Addhaar N.'/>
        <InputBox label='Password' type='password'/>
        <Button1 label='Sign UP'/>
      </div>
    </div>
  );
};

export default SignUp;