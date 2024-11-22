import Image from 'next/image';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="border rounded shadow p-4">
      <Image
        src={recipe.image}
        alt={recipe.title}
        width={400} // Specify image width
        height={200} // Specify image height
        className="rounded"
      />
      <h3 className="mt-2 text-lg font-bold">{recipe.title}</h3>
      <a
        href={`/recipe-detail/${recipe.id}`}
        className="mt-4 block bg-blue-500 text-white text-center py-2 rounded"
      >
        View Details
      </a>
    </div>
  );
};

export default RecipeCard;
