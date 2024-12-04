import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });
import indexRouter from './routes/index.js'; // Adjust if routes folder structure differs

const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use('/public', express.static('public'));

// Use the indexRouter for root routes
app.use('/', indexRouter);

// Set the port from environment variables or default to 3013
app.set('port', process.env.PORT || 3013);

// Start the server
const server = app.listen(app.get('port'), () => {
  console.log(`🐇 Rabbit Items API running → PORT ${server.address().port}`);
});
