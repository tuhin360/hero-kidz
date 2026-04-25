"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import SocialButton from "./SocialButton";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      alert("Login successful ✅");
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md bg-base-100 shadow-lg rounded-2xl p-6 space-y-5"
    >
      <h2 className="text-2xl font-bold text-center">
        Login to Your Account
      </h2>

      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        className="input input-bordered w-full"
      />

      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="input input-bordered w-full pr-10"
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>

      <button className="btn btn-primary w-full">Login</button>

      <div className="divider">OR</div>

      <SocialButton />

      <p className="text-center text-sm">
        Don’t have an account?{" "}
        <Link href="/register" className="text-primary">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;