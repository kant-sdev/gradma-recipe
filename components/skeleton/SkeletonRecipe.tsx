import { Skeleton } from "@/components/ui/skeleton"

export default function SkeletonRecipe() {
    // Array com 6 itens para simular as categorias
    const skeletonItems = Array.from({ length: 6 }, (item, index) => index)

    return (
        <section className='py-10 w-full flex justify-center'>
            <div className="container">
                {/* Skeleton para o título */}
                <div className="flex flex-col items-center gap-2 mb-8">
                    <h2 className="text-3xl font-bold text-center">Categorias Populares</h2>
                    <p className="text-gray-600 mt-2 text-center mb-8">Encontre receitas por categoria</p>
                </div>

                {/* Grid de cards skeleton */}
                <div className="flex flex-wrap items-center justify-center gap-5">
                    {skeletonItems.map((item) => (
                        <div key={item} className="flex flex-col items-center gap-2">
                            <Skeleton className="h-[200px] w-[200px] rounded-lg" />
                            <Skeleton className="h-4 w-32" />
                            <Skeleton className="h-3 w-20" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
