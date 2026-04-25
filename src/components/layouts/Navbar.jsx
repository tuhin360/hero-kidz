"use client";

import React, { useState } from "react";
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const nav = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink href={"/products"}>Products</NavLink>
      </li>
      <li>
        <NavLink href={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink href={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  const handleLogout = async () => {
    await signOut(auth);
    setIsDropdownOpen(false);
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md max-w-7xl mx-auto w-full">
      {/* START */}
      <div className="navbar-start ">
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

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
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
        <Link href={"/cart"} className="btn btn-ghost relative">
          <FiShoppingCart className="text-xl" />
          <span className="badge badge-sm badge-primary absolute -top-2 -right-2">
            0
          </span>
        </Link>

        {/* LOADING */}
        {loading ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : user ? (
          <div className="flex items-center gap-3 relative">
            {/* User Avatar with Hover Dropdown */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar placeholder"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt={user.displayName || "User"}
                      width={40}
                      height={40}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <div className="bg-primary text-white flex items-center justify-center w-full h-full rounded-full text-lg font-bold">
                      {user.displayName
                        ? user.displayName[0].toUpperCase()
                        : user.email[0].toUpperCase()}
                    </div>
                  )}
                </div>
              </div>

              {/* Dropdown Menu on Hover */}
              {(isDropdownOpen ||
                document.activeElement?.getAttribute("tabindex") === "0") && (
                <ul
                  className="dropdown-content menu bg-base-100 rounded-box z-50 w-64 p-2 shadow-2xl mt-2"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {/* User Info */}
                  <li className="menu-title px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                    <div className="space-y-1">
                      <p className="font-bold text-sm">
                        {user.displayName || "User"}
                      </p>
                      <p className="text-xs text-gray-500 break-all">
                        {user.email}
                      </p>
                    </div>
                  </li>

                  {/* Menu Items */}
                  <li>
                    <Link href="/profile" className="text-sm">
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link href="/orders" className="text-sm">
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <Link href="/wishlist" className="text-sm">
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link href="/settings" className="text-sm">
                      Settings
                    </Link>
                  </li>
                  <li className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                    <button
                      onClick={handleLogout}
                      className="text-sm text-error"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>

            {/* Logout Button - Mobile/Tablet */}
            <button
              onClick={handleLogout}
              className="btn btn-error btn-sm hidden sm:inline-flex"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login" className="btn btn-primary btn-sm md:btn-md">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
