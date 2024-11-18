import React, { useState } from 'react';

const RecipeForm = ({ addRecipe }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'ingredients') {
      setIngredients(value);
    } else {
      const stateUpdate = {
        name: setName,
        description: setDescription,
        instructions: setInstructions,
      };
      stateUpdate[name](value);
    }
  };

  const handleClear = () => {
    setName('');
    setDescription('');
    setIngredients('');
    setInstructions('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      id: Date.now(),
      name,
      description,
      ingredients: ingredients.split(',').map(ingredient => ingredient.trim()),
      instructions,
    };
    addRecipe(newRecipe);
    handleClear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Nome da receita"
      />
      <textarea
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Descrição"
      />
      <input
        type="text"
        name="ingredients"
        value={ingredients}
        onChange={handleChange}
        placeholder="Ingredientes (separados por vírgula)"
      />
      <textarea
        name="instructions"
        value={instructions}
        onChange={handleChange}
        placeholder="Instruções"
      />
      <button type="submit">Adicionar Receita</button>
      <button type="button" onClick={handleClear}>Limpar</button>
    </form>
  );
};

export default RecipeForm;
