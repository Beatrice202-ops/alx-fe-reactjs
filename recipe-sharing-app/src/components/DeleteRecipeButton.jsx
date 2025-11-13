import React from 'react';
import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom'; // 1️⃣ import useNavigate

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // 2️⃣ create navigate function

  // 3️⃣ create a function to delete and then navigate
  const handleDelete = () => {
    deleteRecipe(recipeId);  // delete recipe
    navigate('/');           // go back to homepage
  };

  return (
    <button
      onClick={handleDelete}  // 4️⃣ call handleDelete when clicked
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;

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
