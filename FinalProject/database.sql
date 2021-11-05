CREATE TABLE IF NOT EXISTS authentication(
    id SERIAL PRIMARY KEY,
    login VARCHAR(30) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS cinema(
    Id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    city VARCHAR(30) NOT NULL,
    address VARCHAR(30) NOT NULL,
    number_of_halls SMALLINT,
    is_active BOOLEAN DEFAULT true
);

CREATE TYPE IF NOT EXISTS type_of_seat AS ENUM ('standard', 'VIP','for a couple');

CREATE TABLE IF NOT EXISTS hall
(
    Id SERIAL PRIMARY KEY,
    number_of_rows SMALLINT NOT NULL,
    number_of_seats SMALLINT NOT NULL,
    total_seats SMALLINT,
    type type_of_seat NOT NULL,
);

CREATE TABLE IF NOT EXISTS movie
(
    Id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    description TEXT,
    is_active BOOLEAN DEFAULT true,
);

CREATE TABLE IF NOT EXISTS session
(
    Id SERIAL PRIMARY KEY,
    cinema_id INTEGER NOT NULL REFERENCES cinema(Id) ON DELETE CASCADE NOT NULL,
    movie_id INTEGER NOT NULL REFERENCES movie(Id) ON DELETE CASCADE NOT NULL,
    hall_id INTEGER NOT NULL REFERENCES hall(Id) ON DELETE CASCADE NOT NULL,
    time DATE NOT NULL,
    ticket_priceId FOREIGN KEY?? NOT NULL,
    additional_services VARCHAR(30)[] 
);


-- заходим в папку C:\Program Files\PostgreSQL\14\bin и из нее открываем PowerShell
--  ./psql --version - узнать версию
--  ./psql -U postgres - заходим
-- \l - покажет список существующих БД
-- create database node_postgres; - создаем новую БД
-- \connect node_postgres; - подключиться к БД
-- \dt -  покажет созданные в БД таблицы
-- psql \! chcp 1251 - исправить кодеровку 
-- select * from cinema - хотим получить все поля из таблицы cinema

