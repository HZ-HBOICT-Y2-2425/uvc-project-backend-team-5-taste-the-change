import mysql from 'mysql2/promise';

// Create a connection pool
const recipe = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: "dSK$ME*b+=;3&Pr5T,LC/B",
  database: 'recipe_app',
  port: 3306
});

// Function to fetch all recipes
export async function getAllRecipes(req, res, next) {
  try {
    const [recipeRow] = await recipe.query('SELECT * FROM recipes');
    res.status(200).json(recipeRow);
  } catch (err) {
    next(err);
  }
}

// Function to fetch a recipe by ID
export async function getRecipeId(req, res, next) {
  const id = parseInt(req.params.id, 10);

  try {
    const [recipeRow] = await recipe.query('SELECT * FROM recipes WHERE id = ?', [id]);

    if (recipeRow.length === 0) {
      return res.status(404).send('Recipe not found');
    }

    const recipe = recipeRow[0];
    res.status(200).json({
      name: recipe.name,
      ingredients: recipe.ingredients.split(','),
      emission_per_meal: recipe.emission_per_meal,
      servings: recipe.servings,
      diet: recipe.diet,
      time: recipe.time
    });
  } catch (err) {
    next(err);
  }
}


// Test connection
async function testConnection() {
  try {
    const [recipeRow] = await recipe.query('SELECT 1');
    console.log('Database connection successful', recipeRow);
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
  }
}

testConnection();