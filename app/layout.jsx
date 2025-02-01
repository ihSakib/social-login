// app/layout.js
"use client";

import "./globals.css";
import { SessionProvider, useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";

function LogoutButton() {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" }); // Redirect to homepage after logout
  };

  if (!session) {
    return null; // Hide the logout button if the user is not logged in
  }

  return <button onClick={handleLogout}>Logout</button>;
}

function LoginButton() {
  const { data: session } = useSession();
  return session ? null : <Link href="/login">Login</Link>;
}

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body>
          {/** header */}
          <header>
            <nav className="flex gap-4">
              <Link href="/">Home</Link>
              <Link href="/profile">Profile</Link>
              <LoginButton />
              <LogoutButton />
            </nav>
          </header>
          {/** main  */}
          <main>{children}</main>
          {/**footer */}
          <footer></footer>
        </body>
      </html>
    </SessionProvider>
  );
}
