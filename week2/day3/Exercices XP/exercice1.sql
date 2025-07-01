SELECT * from language

SELECT f.title, f.description, l.name as "language" from film f JOIN language l ON f.language_id=l.language_id

SELECT l.name as "language", f.title, f.description from language l LEFT JOIN film f ON l.language_id=f.language_id

create table new_film (id SERIAL PRIMARY KEY, name varchar(250))

insert into new_film (name) values ('Inception'),('The Matrix'),('Interstellar'),('The Dark Knight'),('Parasite')

create table customer_review 
(review_id  SERIAL PRIMARY KEY, film_id INT NOT NULL, language_id INT NOT NULL,
title VARCHAR(255) NOT NULL,
score INT CHECK (score BETWEEN 1 AND 10), review_text TEXT,
last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
FOREIGN KEY (language_id) REFERENCES language(language_id))


INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
(1, 1, 'Inception', 10,
 'An intelligent and gripping thriller that keeps you guessing until the very end. Brilliant performance and direction.'),
(2, 2, 'The Matrix', 9,
 'Un film révolutionnaire qui a redéfini le cinéma d’action et de science-fiction. Effets spéciaux époustouflants et scénario captivant.');
-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM new_film WHERE id = 1;
SELECT * FROM customer_review WHERE film_id = 1;
-- le film supprimer au même temps dans la table customer_review 