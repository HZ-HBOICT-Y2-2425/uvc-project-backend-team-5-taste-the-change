CREATE DATABASE IF NOT EXISTS goals_app;
USE goals_app;

-- Create root user with password if it doesn't exist
CREATE USER IF NOT EXISTS 'root'@'%' IDENTIFIED BY 'rootpassword';

-- Grant privileges to the root user
GRANT ALL PRIVILEGES ON goals_app.* TO 'root'@'%';

-- Ensure privileges are flushed
FLUSH PRIVILEGES;

-- Create table (if it doesn't exist already)
CREATE TABLE IF NOT EXISTS goals (
    id INT PRIMARY KEY AUTO_INCREMENT,
    goal VARCHAR(255) NOT NULL,              
    description TEXT NOT NULL,               
    level ENUM('beginner', 'intermediate', 'advanced') NOT NULL, 
    picked BOOLEAN DEFAULT FALSE,
    last_picked DATETIME     
);

