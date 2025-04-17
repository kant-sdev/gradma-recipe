'use client'

import React from 'react'
import { Card, CardContent } from '../ui/card'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

type CardProps = {
    mealType: string;
    recipeCount?: number; // Quantidade de receitas para cada tipo
    image?: string;
}

export default function CardCategory({ mealType, recipeCount = 0, image }: CardProps) {
    const { data: session } = useSession()
    const router = useRouter();

    const handleClick = () => {
        router.push(session ? `/recipes?category=${encodeURIComponent(mealType)}` : '/auth/login')
    }

    return (
        <Card
            onClick={handleClick}
            className='w-[280px] h-[180px] hover:shadow-lg transition-all cursor-pointer bg-white rounded-lg overflow-hidden relative group'
        >
            {image && (
                <div className="absolute inset-0">
                    <Image
                        src={image}
                        alt={`Imagem de ${mealType}`}
                        fill
                        className="object-cover transition-opacity group-hover:opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
            )}

            <CardContent className='p-6 flex flex-col justify-end h-full relative z-10'>
                <h3 className='text-xl font-bold text-white'>
                    {mealType}
                </h3>
                <p className='text-sm text-gray-200'>
                    {recipeCount} {recipeCount === 1 ? 'receita' : 'receitas'}
                </p>
            </CardContent>
        </Card>
    )
}
