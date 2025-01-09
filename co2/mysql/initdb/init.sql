CREATE DATABASE IF NOT EXISTS co2_app;
USE co2_app;

-- Create root user with password if it doesn't exist
CREATE USER IF NOT EXISTS 'root'@'%' IDENTIFIED BY 'rootpassword';

-- Grant privileges to the root user
GRANT ALL PRIVILEGES ON co2_app.* TO 'root'@'%';

-- Ensure privileges are flushed
FLUSH PRIVILEGES;

-- Create table (if it doesn't exist already)
CREATE TABLE IF NOT EXISTS co2Saved (
    co2Saved INT NOT NULL
);

