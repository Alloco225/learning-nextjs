import NextAuth, { NextAuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/prisma/client";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
	providers: [Google({ clientId: process.env.GOOGLE_CLIENT_ID!, clientSecret: process.env.GOOGLE_CLIENT_SECRET! })],
    session: {
        strategy: "jwt",
    }

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
