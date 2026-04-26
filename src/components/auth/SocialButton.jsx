"use client";

import { FaGoogle } from "react-icons/fa";
import { auth } from "@/lib/firebase";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const SocialButton = () => {
  const router = useRouter();

  const provider = new GoogleAuthProvider();

  //  LOGIN
  const handleGoogleLogin = async () => {
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  //  HANDLE REDIRECT RESULT (FIXED)
  useEffect(() => {
    const checkLogin = async () => {
      try {
        const result = await getRedirectResult(auth);

        if (result?.user) {
          router.push("/");
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    checkLogin();
  }, [router]);

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
