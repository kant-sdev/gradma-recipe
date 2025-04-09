'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'

export default function LoginPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const from = searchParams.get('from') || ''
    const message = searchParams.get('message')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setLoading(true)
        setError('')

        console.log('Tentando fazer login com:', { email })

        try {
            const result = await signIn('credentials', {
                email,
                password,
                redirect: false
            })

            console.log('Resultado do login:', result)

            if (result?.error) {
                setError(`Credenciais inválidas. Tente novamente. (${result.error})`)
                return
            }

            console.log('Login bem-sucedido, redirecionando para:', from)
            router.push('/grandmas-recipes')
            router.refresh()
        } catch (error) {
            console.error('Erro ao fazer login:', error)
            setError('Ocorreu um erro ao tentar fazer login. Tente novamente.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="h-screen flex items-center justify-center bg-slate-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

                {message && (
                    <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
                        {message}
                    </div>
                )}

                {error && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Senha
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-amber-800 text-white py-2 px-4 rounded-md hover:bg-amber-900 transition disabled:opacity-70"
                    >
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>

                <div className="mt-4 text-center text-sm text-gray-600">
                    <p className="mb-2">
                        Ainda não tem uma conta?{' '}
                        <Link href="/auth/register" className="text-amber-800 hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
} 