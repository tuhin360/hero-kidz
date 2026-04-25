import Logo from "@/components/layouts/Logo";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">

      {/* Logo */}
      <Logo />

      {/* Spinner */}
      <span className="loading loading-spinner loading-lg text-primary"></span>

      {/* Text */}
      <p className="text-sm text-gray-500">
        Loading please wait...
      </p>

    </div>
  );
};

export default Loading;