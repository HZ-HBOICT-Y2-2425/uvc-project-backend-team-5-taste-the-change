CREATE DATABASE IF NOT EXISTS recipe_app;
USE recipe_app;

CREATE USER IF NOT EXISTS 'user'@'%' IDENTIFIED BY 'handbal@HS123';

GRANT ALL PRIVILEGES ON recipe_app.* TO 'user'@'%';
FLUSH PRIVILEGES;

CREATE TABLE IF NOT EXISTS recipes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  ingredients TEXT,
  emission_per_meal DECIMAL(10, 2),
  servings INT,
  diet VARCHAR(50),
  time INT,
  image VARCHAR(255)
);
