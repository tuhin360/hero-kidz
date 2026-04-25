"use client";

import React from "react";
import Logo from "./Logo";
import NavLink from "../buttons/NavLink";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import useAuth from "@/hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Image from "next/image";

const Navbar = () => {
  const { user, loading } = useAuth();

  const nav = (
    <>
      <li><NavLink href={"/"}>Home</NavLink></li>
      <li><NavLink href={"/products"}>Products</NavLink></li>
      <li><NavLink href={"/about"}>About</NavLink></li>
      <li><NavLink href={"/contact"}>Contact</NavLink></li>
    </>
  );

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="navbar bg-base-100">
      
      {/* START */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {nav}
          </ul>
        </div>

        <Logo />
      </div>

      {/* CENTER */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>

      {/* END */}
      <div className="navbar-end space-x-4">

        {/* CART */}
        <Link href={"/cart"} className="btn">
          <FiShoppingCart />
        </Link>

        {/* LOADING */}
        {loading ? (
          <span className="loading loading-spinner"></span>
        ) : user ? (
          <div className="flex items-center gap-3">

            {/* USER INFO */}
            <div className="text-right hidden md:block">
              <p className="text-sm font-medium">
                {user.displayName || "User"}
              </p>
              <p className="text-xs text-gray-500">
                {user.email}
              </p>
            </div>

            {/* IMAGE */}
            {user.photoURL && (
              <Image
                src={user.photoURL}
                alt="user"
                width={40}
                height={40}
                className="w-8 h-8 rounded-full"
              />
            )}

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="btn btn-error btn-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;