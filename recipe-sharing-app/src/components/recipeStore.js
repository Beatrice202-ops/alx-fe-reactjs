import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',

  // Actions
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r)
  })),
  deleteRecipe: (recipeId) => set((state) => ({
    recipes: state.recipes.filter(r => r.id !== recipeId)
  })),
  setRecipes: (recipes) => set({ recipes }),
  setSearchTerm: (term) => set({ searchTerm: term }),

  // Derived state for filtered recipes
  get filteredRecipes() {
    if (!this.searchTerm) return this.recipes;
    return this.recipes.filter(r => r.title.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}));
