import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import RecipeForm from './components/RecipeForm';
import RecipeDetail from './components/RecipeDetail'; // Certifique-se de importar o componente RecipeDetail
import './styles/App.css';
import './styles/Recipe.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const selectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/about">Sobre</Link></li>
            <li><Link to="/contact">Contato</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage recipes={recipes} selectRecipe={selectRecipe} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <RecipeForm addRecipe={addRecipe} />
        {selectedRecipe && <RecipeDetail recipe={selectedRecipe} />}
      </div>
    </Router>
  );
}

export default App;
