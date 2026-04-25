export default function ProductSkeleton() {
  return (
    <div className="card bg-base-100 shadow-md rounded-2xl overflow-hidden border border-gray-200 animate-pulse">
      {/* Image */}
      <div className="skeleton h-52 w-full"></div>

      <div className="card-body p-4 space-y-3">
        {/* Title */}
        <div className="space-y-2">
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-2/3"></div>
        </div>

        {/* Rating + Reviews */}
        <div className="flex items-center gap-2">
          <div className="skeleton h-4 w-4 rounded-full"></div>
          <div className="skeleton h-4 w-10"></div>
          <div className="skeleton h-4 w-20"></div>
        </div>

        {/* Sold */}
        <div className="skeleton h-3 w-1/3"></div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <div className="skeleton h-5 w-20"></div>
          <div className="skeleton h-4 w-14"></div>
        </div>

        {/* Buttons (IMPORTANT: 2 buttons like real card) */}
        <div className="flex gap-2 mt-2">
          <div className="skeleton h-9 flex-1 rounded-lg"></div>
          <div className="skeleton h-9 flex-1 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
