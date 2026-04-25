import ProductSkeleton from "@/components/skeleton/ProductSkeleton";
import React from "react";

const Loading = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Title Skeleton */}
      <div className="flex justify-center mb-10">
        <div className="skeleton h-10 w-64"></div>
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default Loading;
