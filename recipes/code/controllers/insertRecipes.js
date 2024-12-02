import mysql from 'mysql2/promise';
import { readFile } from 'fs/promises';

async function migrateData() {
  const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: "dSK$ME*b+=;3&Pr5T,LC/B",
    database: 'recipe_app',
    port: 3306
  });

  const jsonData = JSON.parse(await readFile('./recipes/code/controllers/recipes.json', 'utf-8'));

  const recipes = jsonData.recipes;

  for (const recipe of recipes) {
    await pool.query(
      `INSERT INTO recipes (name, description, ingredients, emission_per_meal, servings, diet, time, image)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        recipe.name,
        recipe.description,
        recipe.ingredients.join(','),
        recipe.emission_per_meal,
        recipe.servings,
        recipe.diet,
        recipe.time,
        recipe.image
      ]
    );
  }

  console.log('Data migrated successfully!');
  pool.end();
}

migrateData().catch(console.error);
