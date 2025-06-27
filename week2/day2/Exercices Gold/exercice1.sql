SELECT COUNT(*) FROM film GROUP BY rating ORDER BY rating desc

SELECT * FROM film WHERE rating = 'G' OR rating = 'PG-13' ORDER BY rating desc

SELECT * FROM film WHERE length < 120 AND rental_rate < 3.00 ORDER BY title ASC

 UPDATE customer SET email = 'fatimaezzahrae168@gmail.com', first_name = 'Fatima ezzahrae', Last_name = 'BABIOUI' WHERE customer_id = 10

select * from customer WHERE customer_id = 10

 UPDATE address SET address = '1547 anassi,Casa, Maroc' WHERE address_id = (select address_id from customer WHERE customer_id = 10)

 select * from address WHERE address_id = (select address_id from customer WHERE customer_id = 10)
