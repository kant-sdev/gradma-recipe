import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { HeartIcon, UsersIcon, UtensilsIcon } from 'lucide-react'

export default function AboutSection() {
    return (
        <section className="py-12 bg-orange-50 w-full flex justify-center">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold">Por que usar o Bella Receitas?</h2>
                    <p className="text-gray-600 mt-2">
                        Descubra como nossa plataforma pode transformar sua experiência culinária
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto place-content-center text-center">
                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UtensilsIcon className="h-6 w-6 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Inúmeras Receitas</h3>
                        <p className="text-gray-600">
                            Acesse uma vasta coleção de receitas para todos os gostos, ocasiões e níveis de habilidade.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <HeartIcon className="h-6 w-6 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Crie Coleções</h3>
                        <p className="text-gray-600">
                            Salve suas receitas favoritas e organize-as em coleções personalizadas para acesso rápido.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <UsersIcon className="h-6 w-6 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Brilhe nas ocasiões especiais</h3>
                        <p className="text-gray-600">
                            Vai reunir a família ou preparar algo especial? Encontre a receita perfeita e surpreenda todo mundo com seu talento na cozinha.
                        </p>
                    </div>

                </div>
                    <div className="text-center mt-10 w-full">
                        <Button className="bg-orange-500 hover:bg-orange-600 py-6">
                            <Link href="/auth/login" className='text-xl'>Explorar receitas</Link>
                        </Button>
                    </div>
            </div>
        </section>
    )
}
