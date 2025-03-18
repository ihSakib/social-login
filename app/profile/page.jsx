// app/profile.js
"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  if (!session) {
    return <p className="text-center text-lg py-4">You are not logged in.</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome, {session.user.name}!
        </h1>
        <img
          src={session.user.image}
          alt="Profile Image"
          className="rounded-full h-32 w-32 object-cover mb-4" // Styled image
        />
        <p className="text-lg text-gray-600 mb-2">
          Email: {session.user.email}
        </p>
      </div>
    </div>
  );
}
