CREATE DATABASE IF NOT EXISTS leafs_app;
USE leafs_app;

-- Create root user with password if it doesn't exist
CREATE USER IF NOT EXISTS 'root'@'%' IDENTIFIED BY 'rootpassword';

-- Grant privileges to the root user
GRANT ALL PRIVILEGES ON leafs_app.* TO 'root'@'%';

-- Ensure privileges are flushed
FLUSH PRIVILEGES;

-- Create table (if it doesn't exist already)
CREATE TABLE IF NOT EXISTS leafAmount (
    leafAmount INT NOT NULL
);

