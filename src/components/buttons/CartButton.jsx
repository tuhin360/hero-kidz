"use client";

import useAuth from "@/hooks/useAuth";
import { usePathname, useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import Swal from "sweetalert2";

const CartButton = ({ product }) => {
  const router = useRouter();
  const path = usePathname();
  const { user, loading } = useAuth();

  const addToCart = async () => {
    if (loading) return;

    if (user?.email) {
      const res = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product,
          email: user.email,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ SUCCESS ALERT
        Swal.fire("Success", data.message, "success");

        // 🔥 IMPORTANT: notify navbar
        window.dispatchEvent(new Event("cart-updated"));
      } else {
        Swal.fire("Error", data.message, "error");
      }
    } else {
      router.push(`/login?callbackUrl=${path}`);
    }
  };

  return (
    <button
      onClick={addToCart}
      disabled={loading}
      className="btn btn-primary btn-sm w-full flex items-center justify-center gap-2"
    >
      <FaShoppingCart />
      {loading ? "Checking..." : "Add to Cart"}
    </button>
  );
};

export default CartButton;