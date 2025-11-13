import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet. Add one below!</p>
      ) : (
        recipes.map((recipe) => (
          <div key={recipe.id} className="border p-3 rounded-lg mb-3 shadow-sm">
            <h3 className="font-bold text-lg">{recipe.title}</h3>
            <p className="text-gray-600">{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
