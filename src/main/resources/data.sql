DROP TABLE IF EXISTS colegios;
DROP TABLE IF EXISTS cursos;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS asignaturas;
DROP TABLE IF EXISTS estudiantes;
DROP TABLE IF EXISTS asignaturasxestudiantes;

CREATE TABLE colegios(ID INT PRIMARY KEY, NAME VARCHAR(255));
CREATE TABLE cursos(ID INT PRIMARY KEY, GRADO VARCHAR(255), SALON VARCHAR(255), IDENCOLEGIO INT );
CREATE TABLE users(ID INT PRIMARY KEY, NAME VARCHAR(255));
CREATE TABLE asignaturas(ID INT PRIMARY KEY, NAME VARCHAR(255), IDPROFESOR INT, IDCURSO INT);
CREATE TABLE estudiantes(ID INT PRIMARY KEY, NAME VARCHAR(255));
CREATE TABLE asignaturasxestudiantes(ID INT PRIMARY KEY, IDASIG INT, IDESTUD INT);


INSERT INTO colegios VALUES(1,'El colegio del Olimpo');
INSERT INTO cursos VALUES(1,'10','A',1);
INSERT INTO cursos VALUES(2,'10','B',1);
INSERT INTO cursos VALUES(3,'11','A',1);
INSERT INTO cursos VALUES(4,'11','B',1);
INSERT INTO users VALUES(1,'Némesis');
INSERT INTO users VALUES(2,'Príapo');
INSERT INTO users VALUES(3,'Iris');
INSERT INTO asignaturas VALUES(1,'Matemáticas',1,1);
INSERT INTO asignaturas VALUES(2,'Matemáticas',1,2);
INSERT INTO asignaturas VALUES(3,'Matemáticas',1,3);
INSERT INTO asignaturas VALUES(4,'Matemáticas',1,4);
INSERT INTO asignaturas VALUES(5,'Español',2,1);
INSERT INTO asignaturas VALUES(6,'Español',2,2);
INSERT INTO asignaturas VALUES(7,'Ingles básico',3,1);
INSERT INTO asignaturas VALUES(8,'Ingles avanzado',3,2);
INSERT INTO asignaturas VALUES(9,'Pre Icfes',1,3);
INSERT INTO asignaturas VALUES(10,'Pre Icfes',1,4);
INSERT INTO estudiantes VALUES(1,'Afrodita');
INSERT INTO estudiantes VALUES(2,'Apolo');
INSERT INTO estudiantes VALUES(3,'Ares');
INSERT INTO estudiantes VALUES(4,'Artemisa');
INSERT INTO estudiantes VALUES(5,'Atenea');
INSERT INTO estudiantes VALUES(6,'Dionisio');
INSERT INTO estudiantes VALUES(7,'Hefesto');
INSERT INTO estudiantes VALUES(8,'Hera');
INSERT INTO estudiantes VALUES(9,'Hermes');
INSERT INTO estudiantes VALUES(10,'Hades');
INSERT INTO estudiantes VALUES(11,'Poseidón');
INSERT INTO estudiantes VALUES(12,'Zeus');
INSERT INTO asignaturasxestudiantes VALUES(1,1,1);
INSERT INTO asignaturasxestudiantes VALUES(2,1,2);
INSERT INTO asignaturasxestudiantes VALUES(3,1,3);
INSERT INTO asignaturasxestudiantes VALUES(4,5,1);
INSERT INTO asignaturasxestudiantes VALUES(5,5,2);
INSERT INTO asignaturasxestudiantes VALUES(6,5,3);
INSERT INTO asignaturasxestudiantes VALUES(7,7,1);
INSERT INTO asignaturasxestudiantes VALUES(8,7,2);
INSERT INTO asignaturasxestudiantes VALUES(9,7,3);
INSERT INTO asignaturasxestudiantes VALUES(10,2,4);
INSERT INTO asignaturasxestudiantes VALUES(11,2,5);
INSERT INTO asignaturasxestudiantes VALUES(12,2,6);
INSERT INTO asignaturasxestudiantes VALUES(13,6,4);
INSERT INTO asignaturasxestudiantes VALUES(14,6,5);
INSERT INTO asignaturasxestudiantes VALUES(15,6,6);
INSERT INTO asignaturasxestudiantes VALUES(16,8,4);
INSERT INTO asignaturasxestudiantes VALUES(17,8,5);
INSERT INTO asignaturasxestudiantes VALUES(18,8,6);
INSERT INTO asignaturasxestudiantes VALUES(19,3,7);
INSERT INTO asignaturasxestudiantes VALUES(20,3,8);
INSERT INTO asignaturasxestudiantes VALUES(21,9,7);
INSERT INTO asignaturasxestudiantes VALUES(22,9,8);
INSERT INTO asignaturasxestudiantes VALUES(23,4,9);
INSERT INTO asignaturasxestudiantes VALUES(24,4,10);
INSERT INTO asignaturasxestudiantes VALUES(25,4,11);
INSERT INTO asignaturasxestudiantes VALUES(26,4,12);
INSERT INTO asignaturasxestudiantes VALUES(27,10,9);
INSERT INTO asignaturasxestudiantes VALUES(28,10,10);
INSERT INTO asignaturasxestudiantes VALUES(29,10,11);
INSERT INTO asignaturasxestudiantes VALUES(30,10,12);


-- CREATE TABLE users (
--   id INT PRIMARY KEY,
--   FIRST_NAME VARCHAR(250) NOT NULL,
--   LAST_NAME VARCHAR(250) NOT NULL,
--   EMAIL VARCHAR(250) NOT NULL
-- );

-- INSERT INTO users (ID, FIRST_NAME, LAST_NAME, EMAIL) VALUES
--   (1, 'first', 'last 7', 'abc7@gmail.com'),
--   (2, 'first', 'last 80', 'abc8@gmail.com'),
--   (3, 'first', 'last 90', 'abc9@gmail.com'),
--   (4, 'second', 'last 11', 'abc11@gmail.com');

-- SELECT * FROM USERS 