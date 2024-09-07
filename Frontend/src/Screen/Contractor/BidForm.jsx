import React from "react";
import { useForm } from "react-hook-form";
import { Button1 } from "../../Components/Button/Button.js";
import { InputBox } from "../../Components/Component.js";
import { useSelector, useDispatch } from "react-redux";

import { setUserLoginDetails } from "../../Store/User.js";
const Bidform = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onSubmit = (data) => {
    data.userType = "contractor";
    dispatch(setUserLoginDetails(data));
  };

  console.log(user);
  return (
    <div className='w-full h-full flex items-center justify-center '>
      <form onSubmit={handleSubmit(onSubmit)} className='border h-3/4 w-1/3 bg-gradient-to-r from-green-100 via-blue-200 to-purple-300  flex flex-col justify-evenly items-center rounded-3xl'>
        <h1 className='text-4xl text-center text-customDarkgreen font-bold'>Create a new bid</h1>
        <InputBox label='Crop name' {...register('userName')}/>
        <InputBox label='Quantity'  {...register('quatitiy')}/>
        <InputBox label='Price offered'  {...register('price offered')}/>
        <InputBox label='Due date'  {...register('Date')}/>
        <InputBox label='Description of the Crop'  {...register('Location')}/>
        <Button1 label='Login'/>
      </form>
    </div>
  );
};

export default Bidform;