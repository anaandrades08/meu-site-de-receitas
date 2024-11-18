import React from 'react';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <h2>Receitas</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
