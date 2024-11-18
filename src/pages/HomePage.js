import React from 'react';
import RecipeList from '../components/RecipeList';

const HomePage = ({ recipes, selectRecipe }) => {
  return (
    <div>
      <h1>Página Inicial</h1>
      <RecipeList recipes={recipes} selectRecipe={selectRecipe} />
    </div>
  );
};

export default HomePage;
