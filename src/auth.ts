import NextAuth from "next-auth";
import Discord from "next-auth/providers/discord";

export const { handlers, signIn, signOut, auth } = NextAuth({

  providers: [
    Discord,
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt({ token, account }) {
      if (account) {
        return {
          ...token,
          access_token: account.access_token as string
        }
      }
      return token
    },
    session({ session, token }) {
      session.access_token = token.access_token
      return session
    }
  },
  secret: process.env.AUTH_SECRET
});
