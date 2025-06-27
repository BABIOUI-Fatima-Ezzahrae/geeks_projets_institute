CREATE TABLE purchases (id SERIAL PRIMARY KEY, customer_id int, item_id int, quantity_purchased int NOT NULL, FOREIGN KEY (customer_id) REFERENCES customers(id), FOREIGN KEY (item_id) REFERENCES items(id))

insert into purchases (customer_id, item_id, quantity_purchased)
values (
    (select id from customers WHERE firstname ='Scott'),
    (select id from items WHERE nom = 'Fan'),
    1
),(
    (select id from customers WHERE firstname ='Melanie'),
    (select id from items WHERE nom = 'Large desk'),
    10
),(
    (select id from customers WHERE firstname ='Greg'),
    (select id from items WHERE nom = 'Small Desk'),
    2
)

select * from purchases

select p.*, c.firstname, c.lastname from purchases p JOIN customers c ON p.customer_id = c.id

select * from purchases WHERE customer_id = 5

select p.* from purchases p JOIN items i ON p.item_id = i.id  WHERE i.nom IN ('Large Desk', 'Small Desk')

select c.firstname, c.lastname, i.nom as item_name from customers c join purchases p ON p.customer_id = c.id join items i on p.item_id = i.id

INSERT INTO purchases (customer_id, item_id) VALUES (5, 7)
--une valeur NULL viole la contrainte NOT NULL de la colonne « quantity_purchased » dans la relation « purchases »
