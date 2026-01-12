import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Kullanıcı Adı", type: "text" },
                password: { label: "Şifre", type: "password" }
            },
            async authorize(credentials: Record<string, string> | undefined, req: any) {
                // Simple hardcoded admin for this task. 
                if (credentials?.username === "admin" && credentials?.password === "puar2024") {
                    return { id: "1", name: "Admin", email: "admin@puar.com" };
                }
                return null;
            }
        })
    ],
    pages: {
        signIn: '/admin/login',
    },
    callbacks: {
        async jwt({ token, user }: { token: any; user: any }) {
            return token;
        },
        async session({ session, token }: { session: any; token: any }) {
            return session;
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
