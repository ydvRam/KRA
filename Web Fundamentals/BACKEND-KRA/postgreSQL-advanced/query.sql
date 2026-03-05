-- =====================================
-- ADVANCED POSTGRESQL SQL COMMANDS
-- =====================================


-- CREATE TABLES

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100)
);

CREATE TABLE enrollments (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id),
    course_id INT REFERENCES courses(id)
);



-- =====================================
-- JOINS
-- =====================================

-- INNER JOIN

SELECT s.name, c.title
FROM enrollments e
INNER JOIN students s ON e.student_id = s.id
INNER JOIN courses c ON e.course_id = c.id;


-- LEFT JOIN

SELECT s.name, c.title
FROM students s
LEFT JOIN enrollments e ON s.id = e.student_id
LEFT JOIN courses c ON e.course_id = c.id;


-- FULL JOIN

SELECT s.name, c.title
FROM students s
FULL JOIN enrollments e ON s.id = e.student_id
FULL JOIN courses c ON e.course_id = c.id;



-- =====================================
-- INDEXES
-- =====================================

CREATE INDEX idx_students_email
ON students(email);



-- =====================================
-- TRANSACTIONS
-- =====================================

BEGIN;

INSERT INTO students(name,email)
VALUES ('Ramu','ramu@example.com');

INSERT INTO courses(title)
VALUES ('Node.js');

COMMIT;

-- If error happens
-- ROLLBACK;



-- =====================================
-- JSONB COLUMN
-- =====================================

CREATE TABLE user_profiles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    profile JSONB
);

INSERT INTO user_profiles(name, profile)
VALUES (
    'Ramu',
    '{"skills":["Node","React"],"experience":2}'
);

SELECT profile->'skills'
FROM user_profiles;



-- =====================================
-- RANGE PARTITIONING
-- =====================================

CREATE TABLE orders (
    id SERIAL,
    order_date DATE,
    amount INT
) PARTITION BY RANGE (order_date);


CREATE TABLE orders_2023
PARTITION OF orders
FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');


CREATE TABLE orders_2024
PARTITION OF orders
FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');



-- =====================================
-- BACKUP DATABASE
-- =====================================

-- pg_dump command

-- pg_dump -U postgres dbname > backup.sql



-- =====================================
-- RESTORE DATABASE
-- =====================================

-- pg_restore or psql command

-- psql -U postgres dbname < backup.sql