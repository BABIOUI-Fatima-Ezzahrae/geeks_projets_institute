CREATE TABLE actors (id SERIAL PRIMARY key, firstname VARCHAR(50), lastname VARCHAR(50), gender CHAR(1))

INSERT INTO actors (firstname, lastname, gender) VALUES
('Tom', 'Hanks', 'M'),
('Meryl', 'Streep', 'F'),
('Leonardo', 'DiCaprio', 'M'),
('Scarlett', 'Johansson', 'F'),
('Denzel', 'Washington', 'M');


SELECT count(*) AS Count_Actors  FROM actors




INSERT INTO actors (firstname, lastname, gender) VALUES ('John', '', 'M')

SELECT * FROM actors