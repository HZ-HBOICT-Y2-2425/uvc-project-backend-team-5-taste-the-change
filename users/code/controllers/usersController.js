import db from '../users.js'; // Import the MySQL connection

export async function getUsers(req, res, next) {
  try {
    // Fetch all users from the database
    const query = 'SELECT * FROM users';
    const [results] = await db.query(query);

    res.status(200).json(results);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
// don't mind this, just trying around stuff
// export async function checkAvailability (req, res, next) {
//   try{

//   const query = `SELECT * FROM users WHERE username = 'GordonRamsay'`;
//   const [results] = await db.query(query);

//   } catch (err) {
//     console.error('Errorrrr', err);
//     res.status(500).json ({ error: 'AAAA'});
//   }
// }