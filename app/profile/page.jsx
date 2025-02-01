// app/profile.js
"use client"

import { useSession } from "next-auth/react";

export default function Profile() {
  const { data: session } = useSession();

  if (!session) {
    return <p>You are not logged in.</p>;
  }

  return (
    <div>
      <h1>Welcome, {session.user.name}</h1>
      <img src={session.user.image} alt="Profile Image" />
      <p>Email: {session.user.email}</p>
    </div>
  );
}
