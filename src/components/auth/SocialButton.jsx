"use client";

import { FaGoogle } from "react-icons/fa";

const SocialButton = () => {
  return (
    <button className="btn btn-outline w-full flex items-center gap-2 justify-center">
      <FaGoogle />
      Continue with Google
    </button>
  );
};

export default SocialButton;