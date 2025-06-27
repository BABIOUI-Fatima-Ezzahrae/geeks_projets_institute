UPDATE students SET birthday = '02/11/1998' WHERE Last_name = 'Benichou'

UPDATE students SET Last_name = 'Guez' WHERE Last_name = 'Grez'

select * from students WHERE Last_name = 'Guez'

DELETE from students WHERE first_name = 'Lea' And Last_name = 'Benichou'

select count(*) As "total student" from students

select count(*) As "total student" from students WHERE birthday > '1/01/2000'

ALTER TABLE students ADD COLUMN math_grade INT

UPDATE students SET math_grade = 80 WHERE id = 1

UPDATE students SET math_grade = 90 WHERE id in (2,4)

UPDATE students SET math_grade = 40 WHERE id = 6

select count(*) from students WHERE math_grade > 83

UPDATE students SET math_grade = 40 WHERE id = 6

UPDATE students SET math_grade = 10 WHERE id = 5

INSERT INTO students (first_name, last_name, birthday, math_grade)
VALUES ('Omer', 'Simpson', '1980-10-03', 72);

select first_name, last_name, count(math_grade) AS "total grade" from students GROUP BY first_name,last_name

select first_name, last_name, sum(math_grade) AS "SUM grade" from students

SELECT SUM(math_grade) AS total_math_grade FROM students;
