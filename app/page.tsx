'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {
  const { data: session } = useSession()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sistema de Receitas</h1>

        {session ? (
          <div className="space-y-4">
            <div className="p-4 bg-green-100 border border-green-300 rounded-lg">
              <p className="text-center font-medium">
                Olá, {session.user?.name || 'Usuário'}, você está logado!
              </p>
              <p className="text-center text-sm text-gray-600 mt-1">
                Email: {session.user?.email}
              </p>
            </div>

            <div className="flex flex-col space-y-3">
              <Link
                href="/grandmas-recipes"
                className="w-full bg-amber-800 text-white py-2 px-4 rounded-md hover:bg-amber-900 transition text-center"
              >
                Acessar Receitas da Vovó
              </Link>

              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="w-full bg-slate-200 text-slate-800 py-2 px-4 rounded-md hover:bg-slate-300 transition"
              >
                Sair
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-center text-gray-600 mb-4">
              Bem-vindo ao Sistema de Receitas! Esta página é pública e acessível para todos os usuários.
            </p>

            <div className="flex justify-center">
              <Link
                href="/auth/login"
                className="bg-amber-800 text-white py-2 px-4 rounded-md hover:bg-amber-900 transition"
              >
                Fazer Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
