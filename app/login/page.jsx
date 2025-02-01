// app/page.js
"use client"
import { signIn } from "next-auth/react";

export default function HomePage() {
  return (
    <div>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
}
