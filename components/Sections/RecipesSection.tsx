'use client'

import { useRecipes } from '@/hooks/useRecipes'
import React from 'react'
import CardCategory from '../Cards/CardCategory'
import SkeletonRecipe from '../skeleton/SkeletonRecipe'

export default function RecipesSection() {
  const { data, isLoading, isError, error } = useRecipes()

  if (isLoading) return <SkeletonRecipe />
  if (isError) return <p>Erro ao carregar receitas: {error.message}</p>

  if (!Array.isArray(data)) return <p>Dados inválidos recebidos.</p>

  // Calcula os tipos únicos, contagem e primeira imagem para cada tipo
  const mealTypeInfo = data.reduce((acc, recipe) => {
    recipe.mealType.forEach(type => {
      if (type) {
        if (!acc[type]) {
          acc[type] = {
            count: 0,
            image: recipe.image // Pega a primeira imagem encontrada
          }
        }
        acc[type].count += 1;
      }
    });
    return acc;
  }, {} as Record<string, { count: number; image: string }>);

  // Converte para array e ordena por quantidade de receitas (mais populares primeiro)
  const sortedMealTypes = Object.entries(mealTypeInfo)
    .sort(([, infoA], [, infoB]) => infoB.count - infoA.count)
    .map(([type, info]) => ({
      type,
      count: info.count,
      image: info.image
    }));

  return (
    <section className='py-10 w-full flex justify-center'>
      <div className="container">
        <h2 className="text-3xl font-bold text-center">Categorias Populares</h2>
        <p className="text-gray-600 mt-2 text-center mb-8">Encontre receitas por categoria</p>

        <div className="flex flex-wrap items-center justify-center gap-5">
          {sortedMealTypes.map((mealType) => (
            <CardCategory
              key={mealType.type}
              mealType={mealType.type}
              recipeCount={mealType.count}
              image={mealType.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
