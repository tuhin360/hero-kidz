"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

export default function ProductCard({ product }) {
  const { _id, title, image, price, discount, ratings, reviews, sold, category } = product;
  const [isHovered, setIsHovered] = useState(false);

  const discountedPrice = Math.round(price - (price * discount) / 100);

  return (
    <div 
      className="card bg-base-100 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <figure className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className={`w-full h-52 object-cover transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{discount}%
          </div>
        )}
        
        {/* Category Badge */}
        {category && (
          <div className="absolute top-2 right-2 bg-primary/90 text-white text-xs px-2 py-1 rounded-full">
            {category}
          </div>
        )}
      </figure>

      {/* Content */}
      <div className="card-body p-4 space-y-2">
        <h2 className="text-sm font-semibold line-clamp-2 min-h-10 group-hover:text-primary transition-colors">
          {title}
        </h2>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FaStar className="text-yellow-400" />
          <span>{ratings}</span>
          <span>({reviews})</span>
        </div>

        <p className="text-xs text-gray-400">{sold} sold</p>

        <div className="flex gap-2 items-baseline">
          <span className="text-lg font-bold text-primary">
            ৳{discountedPrice}
          </span>

          {discount > 0 && (
            <span className="line-through text-gray-400 text-sm">৳{price}</span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2 mt-2">
          <button className="btn btn-primary btn-sm w-full flex items-center justify-center gap-2">
            <FaShoppingCart />
            Add to Cart
          </button>

          <Link
            href={`/products/${_id}`}
            className="btn btn-outline btn-sm w-full text-center"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}