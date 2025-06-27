SELECT first_name, Last_name, birthday FROM students WHERE id in (1,2,3,4) ORDER BY Last_name ASC

SELECT * FROM students ORDER BY birthday DESC LIMIT 1;

SELECT first_name, Last_name, birthday FROM students LIMIT 3 OFFSET 2
