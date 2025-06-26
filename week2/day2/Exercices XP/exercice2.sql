SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'; --affiches tous les noms des tables exeiste dans dvdrental

SELECT * FROM customer

SELECT first_name ||' '|| Last_name AS full_name FROM customer

SELECT customer_id,create_date FROM customer

select * from customer ORDER BY first_name DESC

select film_id, title, description, release_year from film ORDER BY rental_rate  desc

select address, phone from address WHERE district ='Texas '

SELECT * FROM film WHERE film_id IN (15, 150);

SELECT film_id, title, description, length, rental_rate FROM film WHERE title = 'smya dyalek'

SELECT film_id, title, description, length, rental_rate FROM film WHERE title like 'Sm%'

SELECT film_id, title, rental_rate FROM film ORDER BY rental_rate ASC LIMIT 10

SELECT film_id, title, rental_rate FROM film ORDER BY rental_rate ASC LIMIT 10 OFFSET 10

SELECT film_id, title, rental_rate FROM film ORDER BY rental_rate ASC OFFSET 10

SELECT c.first_name, c.Last_name, p.amount, p.payment_date FROM customer c JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id ASC

select * from film WHERE film_id not in (
    select film_id from inventory)

select c.city, o.country from city c JOIN country o ON c.country_id = o.country_id

select c.customer_id, c.first_name||' '||c.Last_name AS names, p.amount, p.payment_date from customer c JOIN payment p ON c.customer_id = p.customer_id  