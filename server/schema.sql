-- DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(20),
  PRIMARY KEY (ID)
);

/* Create other tables and define schemas for them here! */

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  userid INT,
  text VARCHAR(200),
  roomname VARCHAR(20),
  PRIMARY KEY (ID)
);

-- CREATE TABLE rooms (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   name VARCHAR(25)
-- );


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

