import { Recipe } from "@/types/recipe";
import { httpClient } from "./httpClient";

export const getRecipes = async() : Promise<Recipe[]> => {
    const res = await httpClient.get('recipes')
    return res.data.recipes
}