import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r)
    })),
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter(r => r.id !== recipeId)
    })),
  setRecipes: (recipes) => set({ recipes }),
}));

