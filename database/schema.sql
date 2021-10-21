DROP DATABASE IF EXISTS groceryList;

CREATE DATABASE groceryList;

USE groceryList;

CREATE TABLE groceries (
  id INT PRIMARY KEY AUTO_INCREMENT,
  item VARCHAR(50),
  quantity INT,
  purchased BOOLEAN DEFAULT false
);

INSERT INTO groceries VALUES (null, 'milk', 1, default);