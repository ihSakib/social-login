// app/layout.js
"use client";

import "./globals.css";
import { SessionProvider, useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";

function LogoutButton() {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  if (!session) {
    return null;
  }

  return (
    <button onClick={handleLogout} className="font-bold hover:text-red-500">
      Logout
    </button>
  );
}

function LoginButton() {
  const { data: session } = useSession();
  return session ? null : (
    <Link href="/login" className="font-bold hover:text-blue-500">
      Login
    </Link>
  );
}

export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className="flex flex-col min-h-screen ">
          {/* header */}
          <header className="bg-gray-100 p-4">
            <nav className="flex gap-4 md:gap-6 justify-center">
              <Link href="/" className="font-bold hover:text-blue-500">
                Home
              </Link>
              <Link href="/profile" className="font-bold hover:text-blue-500">
                Profile
              </Link>
              <LoginButton />
              <LogoutButton />
            </nav>
          </header>
          {/* main  */}
          <main className="p-4">{children}</main>
          {/*footer */}
          <footer className="bg-gray-100 text-sm text-gray-600  p-4 text-center mt-auto">
            <p>&copy; {new Date().getFullYear()} Social Login</p>
          </footer>
        </body>
      </html>
    </SessionProvider>
  );
}
