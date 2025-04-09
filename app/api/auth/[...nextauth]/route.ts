import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/auth/login',
        signOut: '/'
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                try {
                    // Chamar nossa API de autenticação
                    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/authenticate`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password,
                        }),
                    })

                    const data = await res.json()

                    // Se a autenticação foi bem-sucedida, retornar o usuário
                    if (res.ok && data.user) {
                        return {
                            id: data.user.id,
                            name: data.user.name,
                            email: data.user.email,
                            role: data.user.role
                        }
                    }

                    // Se não for bem-sucedida, retornar null
                    return null
                } catch (error) {
                    console.error('Erro na autenticação:', error)
                    return null
                }
            }
        })
    ],
    callbacks: {
        jwt: async ({ token, user }) => {
            const customUser = user as unknown as any

            if (user) {
                return {
                    ...token,
                    role: customUser.role
                }
            }

            return token
        },
        session: async ({ session, token }) => {
            return {
                ...session,
                user: {
                    name: token.name,
                    email: token.email,
                    role: token.role
                }
            }
        }
    },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }