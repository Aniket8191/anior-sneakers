CREATE DATABASE IF NOT EXISTS anior_db;

USE anior_db;

CREATE TABLE IF NOT EXISTS products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    img VARCHAR(255) NOT NULL
);

INSERT IGNORE INTO products (id, name, price, img)
VALUES
(1, 'Sneaker 1', 4999, 'A1.jpg'),
(2, 'Sneaker 2', 5499, 'A2.jpg'),
(3, 'Sneaker 3', 6299, 'A3.jpg'),
(4, 'Sneaker 4', 4799, 'A4.jpg'),
(5, 'Sneaker 5', 5999, 'A5.jpg'),
(6, 'Sneaker 6', 6499, 'A6.jpg'),
(7, 'Sneaker 7', 10899, 'A7.jpg'),
(8, 'Sneaker 8', 9999, 'A8.jpg'),
(9, 'Sneaker 9', 8799, 'A9.jpg');