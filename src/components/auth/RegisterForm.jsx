"use client";

import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";
import SocialButton from "./SocialButton";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      return alert("All fields are required");
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      // set display name
      await updateProfile(userCredential.user, {
        displayName: form.name,
      });

      alert("Registration successful ✅");
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
        Create Your Account
      </h2>

      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="input input-bordered w-full"
      />

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

      <button className="btn btn-primary w-full">Register</button>

      <div className="divider">OR</div>

      <SocialButton />

      <p className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="text-primary">
          Login
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;