CREATE TABLE students (id SERIAL PRIMARY KEY, Last_name varchar(50), first_name varchar(50), birthday date)

insert into students (first_name, Last_name, birthday) 
values ('Marc', 'Benichou', '12/11/1998'), 
('Yoan', 'Cohen', '03/12/2010'), 
('Lea', 'Benichou', '27/07/1987'),
('Amelia', 'Dux', '07/04/1996'),
('David', 'Grez', '14/06/2003'),
('Omer', 'Simpson', '03/10/1980')

insert into students (first_name, Last_name, birthday) 
values ('Fatima Ezzahrae', 'BABIOUI', '18,01,1999')

select * from students

select first_name, Last_name from students

select first_name, Last_name from students WHERE id = 2

select first_name, Last_name from students WHERE Last_name ='Benichou' and first_name = 'Marc'

select first_name, Last_name from students WHERE Last_name ='Benichou' or first_name = 'Marc'

select first_name, Last_name from students WHERE first_name like '%a%'

select first_name, Last_name from students WHERE first_name like 'a%'

select first_name, Last_name from students WHERE first_name like '%a'

select first_name, Last_name from students WHERE first_name like '%a_'

select first_name, Last_name from students WHERE id in (1,3)

select first_name, Last_name from students WHERE birthday >= '01/01/2000'
