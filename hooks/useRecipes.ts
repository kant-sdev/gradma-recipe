
import { getRecipes } from "@/services/recipes"
import { Recipe } from "@/types/recipe"
import { useQuery } from "@tanstack/react-query"

export const useRecipes = () => {
    return useQuery<Recipe []>({
        queryKey: ['recipes'],
        queryFn: getRecipes,
    })
}