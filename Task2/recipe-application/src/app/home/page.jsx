'use client';
import Header from '@/components/Header';
import RecipeCard from '@/components/RecipeCard ';
import SearchBar from '@/components/SearchBar';
import React, { useState } from 'react';


const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // For error handling
  const [query, setQuery] = useState('');

  const fetchRecipes = async (query) => {
    setLoading(true);
    setError(null); // Reset error before new request
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=10&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      const data = await response.json();

      if (response.ok) {
        setRecipes(data.results); // Store recipes
      } else {
        throw new Error(data.message || 'Something went wrong while fetching recipes.');
      }
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setError(error.message); // Update error state
    } finally {
      setLoading(false);
    }
  };

  const clearResults = () => {
    setRecipes([]); // Clear the recipe results
    setQuery(''); // Clear the search bar input
  };

  return (
    <div className="container mx-auto p-4">
      <Header />
      <SearchBar onSearch={fetchRecipes} onClear={clearResults} />
      {loading && <p className="text-center text-blue-500">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}
      <div className="grid grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
