CREATE TABLE items (id SERIAL PRIMARY key, nom VARCHAR(100), price int)
CREATE TABLE customers  (id SERIAL PRIMARY key, firstname varchar(50), lastname VARCHAR(50))

select * from items
select * from customers


INSERT INTO items (nom , price) VALUES ('Small Desk' , 100),('Large desk', 300), ('Fan', 80)
INSERT INTO customers (firstname , lastname) VALUES ('Greg', 'Jones'),('Sandra', 'Jones'),('Scott', 'Scott'),('Trevor', 'Green'),('Melanie', 'Johnson');

SELECT * FROM items where price>80

SELECT *  FROM items where price<=300

SELECT *  FROM customers where lastname='Smith'

SELECT *  FROM customers where lastname='Jones'

SELECT *  FROM customers where lastname !='Scott'


