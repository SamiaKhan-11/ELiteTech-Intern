import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Image from 'next/image'; // Import Image from next/image

const RecipeDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY}`)
        .then((response) => response.json())
        .then((data) => setRecipe(data))
        .catch((error) => console.error('Error fetching recipe details:', error))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!recipe) return <p>Recipe not found!</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{recipe.title}</h1>
      {/* Use the Image component from next/image */}
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={800} // Define the width
        height={600} // Define the height
        className="w-full h-80 object-cover mt-4"
      />
      <p className="mt-4">{recipe.summary}</p>
      <h2 className="mt-6 text-xl font-bold">Ingredients:</h2>
      <ul className="list-disc ml-6 mt-2">
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h2 className="mt-6 text-xl font-bold">Instructions:</h2>
      <p className="mt-2">{recipe.instructions}</p>
    </div>
  );
};

export default RecipeDetails;
