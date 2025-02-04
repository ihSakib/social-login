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
  session: {
    strategy: "jwt", // Use 'jwt' for stateless or 'database' for stateful sessions
    maxAge: 60 * 60, // Session expires after 1 hour (in seconds)
    updateAge: 15 * 60, // Session will be updated every 15 minutes (optional)
  },
  jwt: {
    maxAge: 60 * 60, // JWT token also expires after 1 hour
  },
});

export { handler as GET, handler as POST };
