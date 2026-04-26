"use client";

import { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import Swal from "sweetalert2";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const { user, loading: authLoading } = useAuth();

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  // FETCH CART
  const fetchCart = async () => {
    if (!user?.email) return;

    setLoading(true);

    const res = await fetch("/api/cart/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: user.email }),
    });

    const data = await res.json();

    setItems(data || []);
    setLoading(false);
  };

  useEffect(() => {
    if (user?.email) {
      fetchCart();
    }
  }, [user]);

  //NOT LOGGED IN UI
  if (!authLoading && !user) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold mb-2">Please login first 🔐</h2>
        <p className="text-gray-500 mb-4">
          You need to login to view your cart items
        </p>

        <Link href="/login" className="btn btn-primary">
          Go to Login
        </Link>
      </div>
    );
  }

  //  AUTH LOADING ONLY
  if (authLoading) {
    return <p className="text-center mt-10">Checking authentication...</p>;
  }

  //  CART LOADING
  if (loading) {
    return <p className="text-center mt-10">Loading cart...</p>;
  }

  //  EMPTY CART
  if (!items.length) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold">Your cart is empty 🛒</h2>
      </div>
    );
  }

  const updateQty = async (id, type) => {
    const res = await fetch("/api/cart/update", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, type }),
    });

    const data = await res.json();

    if (res.ok) {
      fetchCart();
      Swal.fire("Updated", data.message, "success");
    }
  };

  const removeItem = async (id) => {
    const res = await fetch("/api/cart", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    const data = await res.json();

    if (res.ok) {
      fetchCart();
      window.dispatchEvent(new Event("cart-updated"));
      Swal.fire("Removed", data.message, "success");
    }
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">My Cart</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            {/* LEFT */}
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name || "product"}
                width={64}
                height={64}
                className="rounded object-cover"
              />

              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-500">
                  ${item.price} × {item.quantity}
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => updateQty(item._id, "decrease")}
                className="btn btn-sm"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => updateQty(item._id, "increase")}
                className="btn btn-sm"
              >
                +
              </button>

              <button
                onClick={() => removeItem(item._id)}
                className="btn btn-error btn-sm"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <div className="mt-8 p-4 border rounded text-right">
        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>

        <button className="btn btn-primary mt-3">Place Order</button>
      </div>
    </div>
  );
};

export default CartPage;
