import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ChefHatIcon } from 'lucide-react'

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden hero-pattern w-full flex justify-center">
            <div className="container py-12 md:py-20 lg:py-24 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            <ChefHatIcon className="h-4 w-4 mr-2" />
                            Um restaurante em casa
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            Descubra receitas <span className="text-primary">deliciosas</span> todos os dias!
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                            Explore nossa coleção de receitas  e encontre a inspiração perfeita para sua próxima refeição.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg" asChild className="rounded-full">
                                <Link href="/categorias">Explorar Receitas</Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="rounded-full">
                                <Link href="/adicionar">Compartilhar Receita</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                        <Image src="/image/hero-image.jpg" fill alt="Delicious food" className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
