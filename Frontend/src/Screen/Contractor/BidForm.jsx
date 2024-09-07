import React from "react";
import { useForm } from "react-hook-form";
import { Button1 } from "../../Components/Button/Button.js";
import { InputBox } from "../../Components/Component.js";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAllBids } from "../../Store/TotalBIds.js";
const Bidform = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const allBids = useSelector((state) => state.TotalBids.allBids);
  console.log(allBids)
  console.log(typeof(allBids))
  const navigate = useNavigate();
  

  const onSubmit = (data) => {
    console.log(data);
    data.ContractID = Math.random().toString(36);;
    const {CropName, Price, Quantity, ContractID, Duration} = data;
    const bid = {CropName, Price, Quantity, ContractID, Duration };
    
    // Dispatch the bid object (no need to wrap in an array)
    dispatch(setAllBids(bid));
    navigate("/contractor/home");


  };
  


  return (
    <div className='w-full h-full flex items-center justify-center '>
      <form onSubmit={handleSubmit(onSubmit)} className='border h-3/4 w-1/3 bg-gradient-to-r from-green-100 via-blue-200 to-purple-300  flex flex-col justify-evenly items-center rounded-3xl'>
        <h1 className='text-4xl text-center text-customDarkgreen font-bold'>Create a new bid</h1>
        <InputBox label='Crop name' {...register('CropName')}/>
        <InputBox label='Quantity'  {...register('Quatity')}/>
        <InputBox label='Price offered'  {...register('Price')}/>
        <InputBox label='Due date' type='date'  {...register('Duration')}/>
        <InputBox label='Description of the Crop'  {...register('Location')}/>
        <Button1 label='Create a bid'/>
      </form>
    </div>
  );
};

export default Bidform;