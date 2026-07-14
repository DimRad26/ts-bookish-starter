INSERT INTO Authors (name)
VALUES
('Hopckins'),
('George'),
('Dijkstra'),
('Dovtoiesky');

INSERT INTO Books
VALUES
(123, '1989', 3),
(223, 'Boby Dick', 2),
(346, 'Memories', 1);

INSERT INTO Author_Book
VALUES
(1, 2),
(2, 1),
(2, 2),
(3, 3),
(4, 3);

INSERT INTO Users
VALUES
('Octav', 123),
('Radu', 321);

INSERT INTO User_Book
VALUES
(1, 1, CAST('07/31/2026' AS DATETIME), CAST('07/01/2026' AS DATETIME), CAST(NULL AS DATETIME)),
(2, 1, CAST('06/30/2026' AS DATETIME), CAST('06/01/2026' AS DATETIME), CAST('06/15/2026' AS DATETIME));