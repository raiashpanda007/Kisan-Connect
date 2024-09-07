import React from "react";
import { useForm } from "react-hook-form";
import { Button1 } from "../../Components/Button/Button.js";
import { InputBox } from "../../Components/Component.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserLoginDetails } from "../../Store/User.js";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    data.userType = "contractor";
    dispatch(setUserLoginDetails(data));
    navigate('/contractor/home');
  };

  console.log(user);
  return (
    <div className='w-full h-full flex items-center justify-center '>
      <form onSubmit={handleSubmit(onSubmit)} className='border h-1/2 w-1/3 bg-gradient-to-r from-green-100 via-blue-200 to-purple-300  flex flex-col justify-evenly items-center rounded-3xl'>
        <h1 className='text-4xl text-center text-customDarkgreen font-bold'>Login</h1>
        <InputBox label='User Name' {...register('userName')}/>
        <InputBox label='Password' type='password' {...register('password')}/>
        <Button1 label='Login'/>
      </form>
    </div>
  );
};

export default Login;