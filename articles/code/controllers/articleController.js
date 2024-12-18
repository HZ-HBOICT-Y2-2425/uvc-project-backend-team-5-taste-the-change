import db from '../articles.js'; // Import the MySQL connection

// Get all recipes
export async function getAllArticles(req, res) {
  const query = 'SELECT * FROM articles'; // SQL query to fetch all records

  try {
    const [results] = await db.query(query); // Execute the query using async/await
    res.status(200).json(results); // Send the results back as a JSON response
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}



// import { readFile } from 'fs/promises';
// const data = JSON.parse(
//   await readFile(
//     new URL('./articles.json', import.meta.url)
//   )
// );


// export async function getAllArticles(req, res) {
//   try {
//     //set header before response
//     res.status(200).send(data);
//   } catch (err) {
//     next(err);
//   }
// }

// export function getArticleId(req, res)  {
//   const id = parseInt(req.params.id, 10); // Convert the id to a number
//   const article = data.articles.find(item => item.id === id); // Assuming your articles have an "id" field

//   try {
//     res.status(200).json({
//       name: article.name,
//       image: article.imgUrl,
//       info: article.info
//     });
//   } catch (err) {
//     res.status(404).send(err)
//   }
// };
