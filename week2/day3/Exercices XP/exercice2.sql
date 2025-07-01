SELECT * FROM store

SELECT * FROM customer

UPDATE film SET language_id = 5 WHERE film_id in (133, 1, 5, 98)
UPDATE film SET language_id = 3 WHERE film_id in (384, 8,427)

-- Which foreign keys (references) are defined for the customer table? : "store_id" de table store, "address_id" de table address

-- How does this affect the way in which we INSERT into the customer table? : Lorsqu'on insère dans la table customer, il faut s'assurer que les valeurs de store_id et address_id existent déjà respectivement dans les tables store et address, sinon l'insertion échouera à cause des clés étrangères.

drop table customer_review

SELECT * from new_film
-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking? -- It's easy step

SELECT count(*) AS "total rental" from rental WHERE rental_date is NULL

SELECT f.title, f.replacement_cost from film f 
join inventory i on f.film_id = i.film_id 
join rental r on i.inventory_id = r.inventory_id 
WHERE r.return_date is NULL ORDER BY f.replacement_cost desc 
LIMIT 30

SELECT f.title from film f join film_actor fa on f.film_id = fa.film_id
join actor a on fa.actor_id = a.actor_id WHERE a.first_name = 'Penelope' and a.last_name = 'Monroe' 
AND (f.description ILIKE '%sumo%' OR f.title ILIKE '%sumo%')

SELECT title, f.length FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name = 'Documentary'
AND f.length < 60 AND f.rating = 'R';

SELECT DISTINCT f.title, p.amount, r.return_date
FROM payment p
JOIN rental r ON p.rental_id = r.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON p.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND p.amount > 4.00
AND r.return_date BETWEEN '2005-07-28' AND '2005-08-01'

SELECT f.title, f.replacement_cost
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
JOIN customer c ON r.customer_id = c.customer_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1
