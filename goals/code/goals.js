import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'mysql-server-goals',  // Docker where MySQL is running 
  user: 'root',       // MySQL user
  password: 'rootpassword', // MySQL password
  database: 'goals_app'  // Database name
});

// Test connection
async function testConnection() {
  try {
    const connection = await db.getConnection();
    console.log('Connected to MySQL');
    connection.release();
  } catch (err) {
    console.error('Could not connect to MySQL:', err);
    process.exit(1); // Exit the app if DB connection fails
  }
}

testConnection();

export default db;
