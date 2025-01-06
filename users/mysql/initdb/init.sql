CREATE DATABASE IF NOT EXISTS users_app;
USE users_app;

-- Create root user with password if it doesn't exist
CREATE USER IF NOT EXISTS 'root'@'%' IDENTIFIED BY 'rootpassword';

-- Grant privileges to the root user
GRANT ALL PRIVILEGES ON users_app.* TO 'root'@'%';

-- Ensure privileges are flushed
FLUSH PRIVILEGES;

-- Create table (if it doesn't exist already)
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) NOT NULL,
    totalemissions INT,
    accountcreationday DATETIME     
);

