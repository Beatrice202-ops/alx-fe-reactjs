import React from 'react';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore(state => state.favorites.map(id =>
    state.recipes.find(recipe => recipe.id === id)
  ));
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  if (favorites.length === 0) return <p>No favorites yet.</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">My Favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id} className="p-2 border rounded mb-2">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)} className="text-red-500">Remove</button>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
