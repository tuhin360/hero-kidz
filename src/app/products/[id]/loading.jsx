import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 animate-pulse">
      
      {/* Top Section */}
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* 🖼️ Image Skeleton */}
        <div className="bg-base-100 p-4 rounded-2xl shadow">
          <div className="skeleton w-full h-87.5 rounded-xl"></div>
        </div>

        {/* 📄 Info Skeleton */}
        <div className="space-y-4">
          
          {/* Title */}
          <div className="skeleton h-6 w-3/4"></div>
          <div className="skeleton h-6 w-1/2"></div>

          {/* Rating */}
          <div className="flex gap-2 items-center">
            <div className="skeleton h-4 w-4 rounded-full"></div>
            <div className="skeleton h-4 w-10"></div>
            <div className="skeleton h-4 w-20"></div>
          </div>

          {/* Price */}
          <div className="flex gap-3 items-center">
            <div className="skeleton h-6 w-24"></div>
            <div className="skeleton h-5 w-16"></div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-5/6"></div>
            <div className="skeleton h-4 w-4/6"></div>
          </div>

          {/* Info List */}
          <div className="space-y-2">
            <div className="skeleton h-4 w-2/3"></div>
            <div className="skeleton h-4 w-1/2"></div>
            <div className="skeleton h-4 w-3/4"></div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-4">
            <div className="skeleton h-10 w-32 rounded-lg"></div>
            <div className="skeleton h-10 w-32 rounded-lg"></div>
          </div>
        </div>
      </div>

      {/* ❓ QnA Skeleton */}
      <div className="mt-12 space-y-4">
        
        <div className="skeleton h-6 w-48"></div>

        {[1, 2].map((_, i) => (
          <div
            key={i}
            className="border p-4 rounded-xl bg-base-100 space-y-2"
          >
            <div className="skeleton h-4 w-3/4"></div>
            <div className="skeleton h-4 w-5/6"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;