
import { readFile } from 'fs/promises';
const data = JSON.parse(
  await readFile(
    new URL('./recipes.json', import.meta.url)
  )
);


export async function getAllRecipes(req, res) {
  try {
    //set header before response
    res.status(200).send(data);
  } catch (err) {
    next(err);
  }
}

export function getRecipeId(req, res)  {
  const id = parseInt(req.params.id, 10); // Convert the id to a number
  const recipe = data.recipes.find(item => item.id === id); // Assuming your recipes have an "id" field

  try {
    res.status(200).json({
      name: recipe.name,
      ingredients: recipe.ingredients,
      emission_per_meal: recipe.emission_per_meal,
      servings: recipe.servings,
      diet: recipe.diet,
      time: recipe.time
    });
  } catch (err) {
    res.status(404).send(err)
  }
};