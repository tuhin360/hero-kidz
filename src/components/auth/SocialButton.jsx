"use client";

import { FaGoogle } from "react-icons/fa";
import { auth } from "@/lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

const SocialButton = () => {
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);

      alert("Google Login Success ✅");
      router.push("/");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="btn btn-outline w-full flex items-center gap-2 justify-center"
    >
      <FaGoogle />
      Continue with Google
    </button>
  );
};

export default SocialButton;