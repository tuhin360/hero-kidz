"use client";

import Link from "next/link";

const Error = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

      {/* Error Title */}
      <h1 className="text-6xl font-bold text-error">
        Oops!
      </h1>

      <h2 className="text-2xl font-semibold mt-4">
        Something went wrong
      </h2>

      {/* Error message (optional debug) */}
      <p className="text-gray-500 mt-2 max-w-md">
        {error?.message || "An unexpected error occurred."}
      </p>

      {/* Buttons */}
      <div className="flex gap-3 mt-6">

        {/* Retry Button */}
        <button
          onClick={() => reset()}
          className="btn btn-primary"
        >
          Try Again
        </button>

        {/* Home Button */}
        <Link href="/" className="btn btn-outline">
          Go Home
        </Link>

      </div>
    </div>
  );
};

export default Error;