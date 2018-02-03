DROP DATABASE IF EXISTS booksDB;

CREATE DATABASE booksDB;

USE booksDB;

CREATE TABLE readList (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(100) NOT NULL,
  author VARCHAR(100) NOT NULL,
  genre VARCHAR(50) NULL,
  year INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO readList (title, author, genre, year)
VALUES ("Stitching Snow", "R.C. Lewis", "Science Fiction",2015);

INSERT INTO readList (title, author, genre, year)
VALUES ("The Restaurant at the End of the Universe", "Douglas Adams", "Science Fiction",1980);

INSERT INTO readList (title, author, genre, year)
VALUES ("Twice In A Lifetime", "Clare Lyndon", "Romance", 2017);

INSERT INTO readList (title, author, genre, year)
VALUES ("Eligible", "Curtis Sittenfeld", "Fiction", 2016);

INSERT INTO readList (title, author, genre, year)
VALUES ("To All the Boys I've Loved Before", "Jenny Han", "Young Adult", 2014);

INSERT INTO readList (title, author, genre, year)
VALUES ("The BFG", "Roald Dahl", "Children's Fiction", 1982);

INSERT INTO readList (title, author, genre, year)
VALUES ("One for the Money", "Janet Evanovich", "Fiction", 1994);

INSERT INTO readList (title, author, genre, year)
VALUES ("Two for the Dough", "Janet Evanovich", "Fiction", 1996);

INSERT INTO readList (title, author, genre, year)
VALUES ("Three to Get Deadly", "Janet Evanovich", "Fiction", 1997);

INSERT INTO readList (title, author, genre, year)
VALUES ("A Knight to Remember", "Bridget Essex", "Romance", 2014);

SELECT * FROM readList;