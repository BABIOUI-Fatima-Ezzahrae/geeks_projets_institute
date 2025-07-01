create table customer (id serial primary key, first_name varchar(25), last_name varchar(25) not null)

create table customer_profile (id serial primary key, isLoggedIn boolean DEFAULT FALSE, customer_id integer unique references customer(id))

insert into customer (first_name, last_name) values 
 ('John', 'Doe'),('Jerome','Lalu'), ('Lea','Rive')

insert into customer_profile (isLoggedIn, customer_id)
values (TRUE, (select id from customer where first_name = 'John')),
    (FALSE, (select id from customer where first_name = 'Jerome'))

select c.first_name from customer c join customer_profile cp on c.id = cp.customer_id where isLoggedIn = TRUE

select c.first_name, cp.isLoggedIn from customer c join customer_profile cp on c.id = cp.customer_id

select c.first_name, cp.isLoggedIn from customer c join customer_profile cp on c.id = cp.customer_id where isLoggedIn = FALSE


create table book (book_id SERIAL PRIMARY KEY, title varchar(50) NOT NULL, author varchar(50) NOT NULL)

insert into book (title, author) 
values ('Alice In Wonderland', 'Lewis Carroll'),
    ('Harry Potter', 'J.K Rowling'),
    ('To kill a mockingbird', 'Harper Lee')

create table student (student_id SERIAL PRIMARY KEY, name varchar(50) NOT NULL UNIQUE, age INTEGER CHECK (age <= 15))

insert into student (name, age)
values ('John', 12), ('Lera', 11),('Patrick', 10),('Bob', 14)

CREATE TABLE library (
  book_fk_id INTEGER,
  student_fk_id INTEGER,
  borrowed_date DATE,
  PRIMARY KEY (book_fk_id, student_fk_id),
  FOREIGN KEY (book_fk_id) REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (student_fk_id) REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE)

insert into library (book_fk_id, student_fk_id, borrowed_date) 
values ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
 (SELECT student_id FROM Student WHERE name = 'John'),
 '2022-02-15'),
 ((SELECT book_id FROM Book WHERE title = 'To kill a mockingbird'),
 (SELECT student_id FROM Student WHERE name = 'Bob'),
 '2021-03-03'),
 ((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
 (SELECT student_id FROM Student WHERE name = 'Lera'),
 '2021-05-23'),
 ((SELECT book_id FROM Book WHERE title = 'Harry Potter'),
 (SELECT student_id FROM Student WHERE name = 'Bob'),
 '2021-08-12')

select * from library

select s.name, b.title from student s 
join library l on s.student_id = l.student_fk_id 
join book b on l.book_fk_id = b.book_id

select avg(s.age) as "average age" from student s
join library l on s.student_id = l.student_fk_id 
join book b on l.book_fk_id = b.book_id
where b.title = 'Alice In Wonderland'

delete from student where name='Bob'

select * from library 

-- what happened in the junction table ? : The student is deleted in the library table