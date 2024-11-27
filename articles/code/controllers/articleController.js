
import { readFile } from 'fs/promises';
const data = JSON.parse(
  await readFile(
    new URL('./articles.json', import.meta.url)
  )
);


export async function getAllArticles(req, res) {
  try {
    //set header before response
    res.status(200).send(data);
  } catch (err) {
    next(err);
  }
}

export function getArticleId(req, res)  {
  const id = parseInt(req.params.id, 10); // Convert the id to a number
  const article = data.articles.find(item => item.id === id); // Assuming your articles have an "id" field

  try {
    res.status(200).json({
      name: article.name,
      image: article.imgUrl,
      info: article.info
    });
  } catch (err) {
    res.status(404).send(err)
  }
};