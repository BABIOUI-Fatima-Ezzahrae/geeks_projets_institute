SELECT firstname, Lastname FROM customers ORDER BY firstname ASC offset (select count(*) - 2 from customers)

delete from purchases WHERE customer_id = (select id from customers WHERE firstname = 'Scott')

select * from purchases WHERE customer_id = (select id from customers WHERE firstname = 'Scott')
SELECT * FROM customers WHERE firstname = 'Scott'
--yeah, is still exist in the customers

SELECT 
  c.id AS customer_id,
  c.firstname AS first_name,
  c.lastname AS last_name,
  COALESCE(p.item_id, NULL) AS item_id,
  COALESCE(p.quantity_purchased, 0) AS quantity
FROM customers c
LEFT JOIN purchases p ON c.id = p.customer_id;


SELECT 
  p.id,
  p.customer_id,
  p.item_id,
  p.quantity_purchased,
  c.firstname,
  c.lastname
FROM purchases p INNER JOIN customers c ON p.customer_id = c.id
