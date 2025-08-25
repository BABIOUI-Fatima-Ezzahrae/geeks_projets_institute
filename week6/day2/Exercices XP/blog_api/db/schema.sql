-- CREATE TABLE Users (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(50) NOT NULL,
--   username TEXT NOT NULL,
--   email TEXT UNIQUE NOT NULL,
--   password TEXT NOT NULL
-- );


CREATE TABLE Posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  content TEXT NOT NULL
);