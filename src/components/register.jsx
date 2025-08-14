import React from "react";
import registerImg from "../assets/register.png";
import userImg from "../assets/user.png";
import googleImg from "../assets/google.png";
import EyeImg from "../assets/eye.png";
import { Link, useNavigate  } from "react-router-dom";


const RegisterPage = () => {

    const navigate = useNavigate();

  return (
    <div className="flex w-screen h-screen overflow-hidden">
      {/* Left Section */}
      <div className="flex flex-col justify-center items-center w-[30%] h-full px-8 bg-white relative">
        {/* Logo */}
        <div className="flex items-center gap-2 absolute top-6 left-6">
          <div className="w-10 h-10 rounded-full bg-gray-300"></div>
          <span className="font-semibold text-lg">ShopRise</span>
        </div>

        {/* Icon */}
        <div className="text-blue-500 text-5xl mb-4">
          <img src={userImg} alt="User" />
        </div>

        {/* Welcome text */}
        <h2 className="text-2xl font-semibold text-[#333333] mb-5">
          Welcome back
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          Don’t have account?{" "}
          <Link to="/signup" className="text-orange-500 underline">Sign up here</Link>

        </p>

        {/* Google Sign in */}
        <button
          className="flex items-center justify-center gap-2 w-full max-w-xs border rounded-md py-2"
          style={{ borderColor: "#D3D3D3",color:"#333333" }}
        >
          <img src={googleImg} alt="Google" />
          <span>Sign in with Google</span>
        </button>

        {/* OR Divider */}
        <div className="flex items-center w-full max-w-xs my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-600">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Email */}
        <div className="w-full max-w-xs relative mb-3 text-sm text-[#333333]">
          Email
          <input
            type="email"
            placeholder="johndoe@gmail.com"
            className="placeholder-[#333333] w-full border rounded-md p-2 pr-10 mt-1"
            style={{ borderColor: "#D3D3D3" }}
          />
        </div>

        {/* Password */}
        <div className="w-full max-w-xs relative mb-3 text-sm text-[#333333]">
          Password
          <input
            type="password"
            placeholder="********"
            className="placeholder-[#333333] w-full border rounded-md p-2 pr-10 mt-1"
            style={{ borderColor: "#D3D3D3" }}
          />
          <span className="absolute right-3 top-9 text-gray-400 cursor-pointer">
            <img src={EyeImg} alt="eye" />
          </span>
        </div>

        {/* Remember me & Forgot password */}
        <div className="flex justify-between items-center w-full max-w-xs my-3 text-sm">
          <label className="flex items-center gap-2 text-[#333333]">
            <input type="checkbox" />
            Remember me
          </label>
        <Link to="/change-password" className="underline text-[#1F3A93] text-sm">Forgot password</Link>
        </div>

        {/* Sign in Button */}
        <button
          className="w-full max-w-xs hover:bg-blue-800 text-white py-2 mt-1 rounded-full"
          style={{ backgroundColor: "#1F3A93" }}
          onClick={() => navigate("/john-doe")}
        >
          Sign in
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="w-[70%] h-full">
        <img
          src={registerImg}
          alt="Login"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default RegisterPage;
