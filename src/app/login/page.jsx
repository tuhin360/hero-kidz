"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import Link from "next/link";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-base-100 shadow-lg rounded-2xl p-6 space-y-5">
        {/* Title */}
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

        {/* Login Button */}
        <button className="btn btn-primary w-full">Login</button>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Google Login */}
        <button className="btn btn-outline w-full flex items-center gap-2 justify-center">
          <FaGoogle />
          Continue with Google
        </button>

        {/* Register Link */}
        <p className="text-center text-sm">
          Don’t have an account?{" "}
          <Link href="/register" className="text-primary font-medium">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
