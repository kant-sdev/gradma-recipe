'use client'

import { Button } from '@/components/ui/button'
import { signOut, useSession } from 'next-auth/react'

export default function GrandmasRecipesPage() {
    const { data: session } = useSession()

    return (
        <div className="min-h-screen bg-amber-50">
            <header className="bg-amber-800 text-white py-4 px-6 flex justify-between items-center">
                <h1 className="text-xl font-bold">Receitas da Vovó</h1>
                <div className="flex items-center gap-4">
                    <span>Olá, {session?.user?.name || 'Usuário'}</span>
                    <Button
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className="bg-amber-700 hover:bg-amber-900 px-3 py-1 rounded-md text-sm transition"
                    >
                        Sair
                    </Button>
                </div>
            </header>

            <main className="container mx-auto py-8 px-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold mb-4">Área Protegida - Receitas Exclusivas</h2>
                    <p className="mb-4">
                        Esta é uma área restrita que só pode ser acessada por usuários autenticados.
                        Você está logado como: <strong>{session?.user?.email}</strong>
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="border border-amber-200 rounded-lg p-4 bg-amber-50">
                                <h3 className="text-lg font-semibold mb-2">Receita Especial #{i}</h3>
                                <p className="text-gray-600">
                                    Uma deliciosa receita tradicional que foi passada de geração em geração.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
