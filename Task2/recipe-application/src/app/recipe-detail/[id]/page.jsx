'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const RecipeDetails = () => {
  const { id } = useParams(); // Access the dynamic route parameter
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchRecipe = async () => {
        try {
          const response = await fetch(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
          );
          const data = await response.json();
          setRecipe(data);
        } catch (error) {
          console.error('Error fetching recipe details:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchRecipe();
    }
  }, [id]);
  

  if (loading) return <p>Loading...</p>;
  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={800}
        height={600}
        className="w-fit h-80 object-cover mt-4"
      />
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: recipe.summary }} />
      <h2 className="mt-6 text-xl font-bold">Ingredients:</h2>
      <ul className="list-disc ml-6 mt-2">
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h2 className="mt-6 text-xl font-bold">Instructions:</h2>
      <div className="mt-2" dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
    </div>
  );
};

export default RecipeDetails;
