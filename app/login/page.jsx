// app/login
"use client";
import { signIn } from "next-auth/react";

const LoginButton = () => {
  const handleLogin = async () => {
    await signIn("google", {
      callbackUrl: "/profile",
    });
  };

  return (
    <div className="flex justify-center my-10">
      <button
        onClick={handleLogin}
        className=" py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white text-sm  rounded-md"
      >
        Login with Google
      </button>
    </div>
  );
};

export default LoginButton;
