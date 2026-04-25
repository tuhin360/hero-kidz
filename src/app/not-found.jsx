import Link from "next/link";
import { FiHome } from "react-icons/fi";

const Error404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Big Error Text */}
      <h1 className="text-7xl font-bold text-primary">404</h1>

      {/* Message */}
      <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>

      <p className="text-gray-500 mt-2 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link href="/" className="btn btn-primary mt-6 flex items-center gap-2">
        <FiHome />
        Back to Home
      </Link>
    </div>
  );
};

export default Error404;
