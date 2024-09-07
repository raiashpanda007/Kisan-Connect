import React from "react";
import { useForm } from "react-hook-form";
import { Button1 } from "../../Components/Button/Button.js";
import { InputBox } from "../../Components/Component.js";
import { useSelector, useDispatch } from "react-redux";
import  { useNavigate } from "react-router-dom";
import { setUserLoginDetails } from "../../Store/User.js";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    data.userType = "farmer";
    dispatch(setUserLoginDetails(data));
    navigate('/farmer/home');
  };

  console.log(user); // This will log the updated user after re-render

  return (
    <div className="w-full h-full flex items-center justify-center ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border h-1/2 w-1/3 bg-gradient-to-r from-green-100 via-blue-200 to-purple-300  flex flex-col justify-evenly items-center rounded-3xl animate-slideInFromleft"
      >
        <h1 className="text-4xl text-center text-customDarkgreen font-bold">
          Login
        </h1>
        <InputBox label="UID" {...register("uid")} />
        <InputBox label="Phone Number" {...register("phoneNumber")} />
        <InputBox label="Password" type="password" {...register("password")} />
        <Button1 label="Login" type="submit" />
      </form>
    </div>
  );
};
export default Login;
