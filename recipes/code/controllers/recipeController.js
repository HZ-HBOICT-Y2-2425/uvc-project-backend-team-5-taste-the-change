import db from '../recipes.js'; // Import the MySQL connection

// Get all recipes
export async function getAllRecipes(req, res) {
  const query = 'SELECT * FROM recipes'; // SQL query to fetch all records

  try {
    const [results] = await db.query(query); // Execute the query using async/await
    res.status(200).json(results); // Send the results back as a JSON response
  } catch (err) {
    next(err);
  }
}

export function getRecipeId(req, res)  {
  const id = parseInt(req.params.id, 10); // Convert the id to a number
  const recipe = data.recipes.find(item => item.id === id); // Assuming your recipes have an "id" field

  try {
    res.status(200).json({
      id: recipe.id,
      name: recipe.name,
      description: recipe.description,
      ingredients: recipe.ingredients,
      emission_per_meal: recipe.emission_per_meal,
      servings: recipe.servings,
      diet: recipe.diet,
      time: recipe.time, 
      image: recipe.image,
      slug: recipe.slug,
      instructions: recipe.instructions
    });
  } catch (err) {
    res.status(404).send(err)
  }
};