// app/api/auth/[...nextauth]/route.js

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // Add other providers if needed
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth/signin", // Custom login page
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Optionally, you can customize the redirect URL here
      // For example, if you want to redirect to a specific page after login:
      if (url === "/auth/signin") {
        return baseUrl; // Redirect to the home page or any other URL
      }
      return url || baseUrl;
    },
  },
});

export { handler as GET, handler as POST };
