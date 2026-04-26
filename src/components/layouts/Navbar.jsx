"use client";

import React, { useEffect, useState } from "react";
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
  const [cartCount, setCartCount] = useState(0);

  const nav = (
    <>
      <li><NavLink href="/">Home</NavLink></li>
      <li><NavLink href="/products">Products</NavLink></li>
      <li><NavLink href="/about">About</NavLink></li>
      <li><NavLink href="/contact">Contact</NavLink></li>
    </>
  );

  // 🔥 FETCH CART COUNT
  const fetchCartCount = async () => {
    if (!user?.email) return;

    const res = await fetch("/api/cart/count", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    });

    const data = await res.json();
    setCartCount(data.count || 0);
  };

  // ✅ AUTO FETCH WHEN USER CHANGES
  useEffect(() => {
    if (!user?.email) {
      setCartCount(0); // 🔥 FIX: reset on logout
      return;
    }

    fetchCartCount();
  }, [user]);

  // 🔥 LISTEN CART UPDATE EVENT
  useEffect(() => {
    const updateCart = () => fetchCartCount();

    window.addEventListener("cart-updated", updateCart);

    return () => window.removeEventListener("cart-updated", updateCart);
  }, [user]);

  // 🚀 LOGOUT FIX
  const handleLogout = async () => {
    await signOut(auth);

    setCartCount(0); // 🔥 instant reset
    setIsDropdownOpen(false);

    window.dispatchEvent(new Event("logout")); // optional global sync
  };

  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 shadow-md max-w-7xl mx-auto w-full">

      {/* START */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 mt-3 w-52 p-2 shadow">
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
        <Link href="/cart" className="btn btn-ghost relative">
          <FiShoppingCart className="text-xl" />

          <span className="badge badge-sm badge-primary absolute -top-2 -right-2">
            {cartCount}
          </span>
        </Link>

        {/* LOADING */}
        {loading ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : user ? (
          <div className="flex items-center gap-3 relative">

            {/* AVATAR */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="w-10 h-10 rounded-full ring ring-primary">

                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt="user"
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="bg-primary text-white flex items-center justify-center w-full h-full rounded-full">
                      {user.email?.[0]?.toUpperCase()}
                    </div>
                  )}

                </div>
              </div>

              {/* DROPDOWN */}
              {(isDropdownOpen ||
                document.activeElement?.getAttribute("tabindex") === "0") && (
                <ul
                  className="dropdown-content menu bg-base-100 rounded-box w-64 p-2 shadow-2xl mt-2"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >

                  <li className="menu-title">
                    <div>
                      <p className="font-bold">
                        {user.displayName || "User"}
                      </p>
                      <p className="text-xs text-gray-500">
                        {user.email}
                      </p>
                    </div>
                  </li>

                  <li><Link href="/profile">Profile</Link></li>
                  <li><Link href="/orders">Orders</Link></li>
                  <li><Link href="/wishlist">Wishlist</Link></li>

                  <li className="border-t mt-2 pt-2">
                    <button
                      onClick={handleLogout}
                      className="text-error"
                    >
                      Logout
                    </button>
                  </li>

                </ul>
              )}
            </div>

          </div>
        ) : (
          <Link href="/login" className="btn btn-primary btn-sm">
            Login
          </Link>
        )}

      </div>
    </div>
  );
};

export default Navbar;