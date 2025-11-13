import React from 'react';
import { useRecipeStore } from './recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const addFavorite = useRecipeStore(state => state.addFavorite);

  if (recommendations.length === 0) return <p>No recommendations yet.</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Recommended for You</h2>
      {recommendations.map(recipe => (
        <div key={recipe.id} className="p-2 border rounded mb-2">
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => addFavorite(recipe.id)} className="text-green-500">Add to Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
