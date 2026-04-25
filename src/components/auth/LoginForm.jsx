"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import SocialButton from "./SocialButton";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-md bg-base-100 shadow-lg rounded-2xl p-6 space-y-5">

      <h2 className="text-2xl font-bold text-center">
        Login to Your Account
      </h2>

      {/* Email */}
      <div>
        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full mt-1"
        />
      </div>

      {/* Password */}
      <div>
        <label className="text-sm font-medium">Password</label>

        <div className="relative mt-1">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="input input-bordered w-full pr-10"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      {/* Button */}
      <button className="btn btn-primary w-full">Login</button>

      <div className="divider">OR</div>

      <SocialButton />

      <p className="text-center text-sm">
        Don’t have an account?{" "}
        <Link href="/register" className="text-primary font-medium">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;