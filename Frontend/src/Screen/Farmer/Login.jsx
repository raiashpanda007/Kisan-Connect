import React, { useState } from 'react';
import {useForm} from 'react-hook-form'
import {Button1} from '../../Components/Button/Button.js'
import {InputBox} from '../../Components/Component.js'
const Login = () => {
  const {register, handleSubmit} = useForm();

  return (
    <div className='w-full h-full flex items-center justify-center '>
      <div className='border h-1/2 w-1/3 bg-gradient-to-r from-green-100 via-blue-200 to-purple-300  flex flex-col justify-evenly items-center rounded-3xl animate-slideInFromleft'>
        <h1 className='text-4xl text-center text-customDarkgreen font-bold'>Login</h1>
        <InputBox label='UID'/>
        <InputBox label='Phone Number'/>
        <InputBox label='Password' type='password'/>
        <Button1 label='Login'/>
     </div>
    </div>
  );
};

export default Login;