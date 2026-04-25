"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import SocialButton from "./SocialButton";
import { postUser } from "@/actions/server/auth";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // handle change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      return alert("All fields are required");
    }

    const result = await postUser(form);

    if (result?.acknowledged) {
      alert("Successfully registered! Please login.");
      router.push("/login");
    } else {
      alert("User already exists or error!");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-base-100 shadow-lg rounded-2xl p-6 space-y-5"
    >
      <h2 className="text-2xl font-bold text-center">
        Create Your Account
      </h2>

      {/* Name */}
      <div>
        <label className="text-sm font-medium">Full Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="input input-bordered w-full mt-1"
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
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
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Create a password"
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
      <button type="submit" className="btn btn-primary w-full">
        Register
      </button>

      <div className="divider">OR</div>

      <SocialButton />

      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-primary font-medium">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;