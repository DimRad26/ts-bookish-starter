CREATE TABLE Books (
   book_id INT IDENTITY(1, 1) PRIMARY KEY,
   ISBN INT unique,
   title VARCHAR(50),
   copies_count INT
);

CREATE TABLE Authors (
	author_id INT IDENTITY(1, 1) PRIMARY KEY,
	name VARCHAR(50)
);

CREATE TABLE Author_Book (
	author_id INT NOT NULL,
	book_id INT NOT NULL,
	PRIMARY KEY (author_id, book_id),
	FOREIGN KEY (author_id) REFERENCES Authors(author_id),
	FOREIGN KEY (book_id) REFERENCES Books(book_id)
);

CREATE TABLE Users (
	user_id INT IDENTITY(1, 1) PRIMARY KEY,
	name VARCHAR(50),
	password_hash INT
);

CREATE TABLE User_Book (
	book_id INT NOT NULL,
	user_id INT NOT NULL,
	due_date DATETIME,
	borrow_date DATETIME NOT NULL,
	return_date DATETIME,
	PRIMARY KEY (book_id, user_id),
	FOREIGN KEY (book_id) REFERENCES Books(book_id),
	FOREIGN KEY (user_id) REFERENCES Users(user_id),
);